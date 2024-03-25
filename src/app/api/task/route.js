import prisma from "../../../../libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { name, description, developerId } = body;

  if (!name || !description ) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  try {
    const newTask = await prisma.task.create({
      data: {
        name,
        description,
        developerId,
        endDate
      },
    });

    return NextResponse.json(newTask);
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function PUT(request) {
  const body = await request.json();
  const { id, name, description, status } = body;

  if (!name || !description) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  try {
    const updatedTask = await prisma.task.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        status
      },
    });

    return NextResponse.json(updatedTask);
  } catch (error) {
    console.log(error);

    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
