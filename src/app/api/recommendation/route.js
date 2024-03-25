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
    const userRecomm = await prisma.recommendation.findMany({
      where: {
        userId,
      },
    });

    return NextResponse.json(userRecomm);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function PUT(request) {
  const body = await request.json()
  const { title, description, id } = body;

  if (!title || !description) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  try {
    const updateRecommendation = await prisma.recommendation.update({
      where: {
        id,
      },
      data: {
        title,
        description,
      },
    })
    return NextResponse.json(updateRecommendation);
  } catch (error) {
    console.log(error)
  }
}