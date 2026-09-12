import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const lore = await prisma.loreEntry.findMany({
      orderBy: { order: 'asc' },
    });

    return NextResponse.json(lore);
  } catch (error) {
    console.error('Error fetching lore:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, content, category, image, order } = await req.json();

    const loreEntry = await prisma.loreEntry.create({
      data: {
        title,
        content,
        category,
        image,
        order,
      },
    });

    return NextResponse.json(loreEntry, { status: 201 });
  } catch (error) {
    console.error('Error creating lore entry:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
