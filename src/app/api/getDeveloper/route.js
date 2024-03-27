import prisma from "../../../../libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request) {
  
    try {
      const allDevelopers = await prisma.developer.findMany();
      console.log(allDevelopers);
      return NextResponse.json(allDevelopers);
     
    } catch (error) {
      console.log(error)
      return new NextResponse("Internal Server Error", { status: 500 })
    }
  }