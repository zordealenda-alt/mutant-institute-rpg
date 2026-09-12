import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const characters = await prisma.character.findMany({
      where: { userId: session.user.id },
      include: {
        mutations: {
          include: {
            mutation: {
              include: {
                levels: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(characters);
  } catch (error) {
    console.error('Error fetching characters:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { name, description, image, level, health, power } = await req.json();

    const character = await prisma.character.create({
      data: {
        userId: session.user.id,
        name,
        description,
        image,
        level,
        maxHealth: health,
        health,
        maxPower: power,
        power,
      },
    });

    return NextResponse.json(character, { status: 201 });
  } catch (error) {
    console.error('Error creating character:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
