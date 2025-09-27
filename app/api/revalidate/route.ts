import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const secret = body.secret;

  // Verify the secret token
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    // Revalidate the broadband plans page
    revalidatePath('/plans/broadband');
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    console.error("Error revalidating:", err);
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
