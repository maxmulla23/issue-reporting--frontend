import bcrypt from "bcryptjs";
import prisma from "../../../../libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request) {
  console.log(request);
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



export async function POST(request) {
  const body = await request.json();
  const { title, description, userId } = body;

  if (!title || !description || !userId) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  try {
    const newIssue = await prisma.issue.create({
      data: {
        title,
        description,
        userId,
      },
    });

    return NextResponse.json(newIssue);
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function PUT(request) {
  const body = await request.json();
  const { title, description, id } = body;

  if (!title || !description) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  try {
    const updatedIssue = await prisma.issue.update({
      where: {
        id,
      },
      data: {
        title,
        description,
      },
    });

    return NextResponse.json(updatedIssue);
  } catch (error) {
    console.log(error);

    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
