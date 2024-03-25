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