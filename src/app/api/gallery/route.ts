// app/api/gallery/route.ts
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const GALLERY_DIR = path.join(process.cwd(), 'public', 'assets', 'gallery');
const ALLOWED = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif']);

export async function GET() {
  try {
    const items = await fs.readdir(GALLERY_DIR, { withFileTypes: true });
    const files = items
      .filter((d) => d.isFile())
      .map((d) => d.name)
      .filter((name) => ALLOWED.has(path.extname(name).toLowerCase()))
      .map((name) => ({
        name,
        src: `/assets/gallery/${name}`, // served from /public
      }));
    return NextResponse.json({ images: files });
  } catch (e) {
    return NextResponse.json({ images: [] });
  }
}
