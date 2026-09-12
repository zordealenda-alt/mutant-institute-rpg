import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const mutations = await prisma.mutation.findMany({
      include: {
        levels: {
          orderBy: { level: 'asc' },
        },
      },
    });

    return NextResponse.json(mutations);
  } catch (error) {
    console.error('Error fetching mutations:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, description, category, type, image } = await req.json();

    const mutation = await prisma.mutation.create({
      data: {
        name,
        description,
        category,
        type,
        image,
      },
    });

    return NextResponse.json(mutation, { status: 201 });
  } catch (error) {
    console.error('Error creating mutation:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
