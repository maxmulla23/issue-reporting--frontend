import prisma from "../../../../libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { name, description } = body;

  if (!name || !description ) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  try {
    const newTask = await prisma.task.create({
      data: {
        name,
        description,
      },
     
    });

    return NextResponse.json(newTask);
  } catch (error) {
    console.log(error);
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
        status
      },
    });

    return NextResponse.json(updatedTask);
  } catch (error) {
    console.log(error);

    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
export async function GET(request) {
   
    try {
      const AllTasks = await prisma.task.findMany({
        orderBy: {
          id : 'asc'
        }
      });
  
      return NextResponse.json(AllTasks);
    } catch (error) {
      console.log(error);
      return new NextResponse("Internal Server Error", { status: 500 });
    }
  }
