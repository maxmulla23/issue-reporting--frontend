import prisma from "../../../../libs/prismadb"
import { NextResponse } from "next/server"

export async function POST(request) {
    const body = await request.json()
    const { title, description, userId } = body

    if (!title || !description || !userId) {
        return new NextResponse("Missing Fields", { status: 400 })
    }

    try {
        const newRecomm = await prisma.recommendation.create({
            data: {
                title,
                description,
                userId,
            }
        })
        return NextResponse.json(newRecomm)
    } catch (error) {
        return new NextResponse("Internal server Error", { status: 500 })
    }
}

export async function GET(request) {
    const { searchParams } = new URL(request.url);

  console.log(searchParams);

  let userId = parseInt(searchParams.get("userId"));

  console.log(userId);
  try {
    const userIssues = await prisma.issue.findMany({
      where: {
        userId,
      },
    });

    return NextResponse.json(userIssues);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}