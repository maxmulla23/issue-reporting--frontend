import prisma from "../../../../libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
      const allIssues = await prisma.issue.findMany();
      return NextResponse.json(allIssues);
    } catch (error) {
      return new NextResponse("Internal Server Error", { status: 500})
    }
    }