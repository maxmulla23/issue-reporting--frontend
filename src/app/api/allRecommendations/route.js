import prisma from "../../../../libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
      const allRecommendations = await prisma.recommendation.findMany();
      return NextResponse.json(allRecommendations);
    } catch (error) {
      return new NextResponse("Internal Server Error", { status: 500})
    }
    }