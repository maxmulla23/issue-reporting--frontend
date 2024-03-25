import bcrypt from 'bcryptjs'
import prisma from '../../../../libs/prismadb'
import { NextResponse } from 'next/server'

export async function GET(request){
    return NextResponse.json({
        msg: "FFFFFFFFF"
    })
}

export async function POST(request){
    const body = await request.json();
    const { name, email, password, isStudent, isLecturer, isAdmin } = body;

    if(!name || !email || !password) {
        return new NextResponse('Missing Fields', { status: 400 })
    }

    const exist = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if(exist) {
        throw new Error('Email already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword,
            isLecturer,
            isStudent,
            isAdmin
        }
    });

    return NextResponse.json(user)
}