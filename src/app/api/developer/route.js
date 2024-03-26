import bcrypt from "bcryptjs";
import prisma from "../../../../libs/prismadb";
import { NextResponse } from "next/server";



export async function POST(request) {
  const body = await request.json();
  const { name, email } = body;

  if (!name || !email ) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  try {
    const newDeveloper = await prisma.developer.create({
      data: {
        name,
        email,
      },
    });

    return NextResponse.json(newDeveloper);
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET(request) {
  
  try {
    const developers = await prisma.developer.findMany();
    console.log(developers);
    return NextResponse.json(developers);
   
  } catch (error) {
    console.log(error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}

export async function PUT(request) {
  const body = await request.json();
  const { id, name, email } = body;

  if (!title || !description) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  try {
    const updatedDev = await prisma.developer.update({
      where: {
        id,
      },
      data: {
        name,
        email
      },
    });

    return NextResponse.json(updatedDev);
  } catch (error) {
    console.log(error);

    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
