import { encrypt } from '@/app/lib/auth';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
  const { userId, email, role } = await req.json();

  if (!userId || !email || !role) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const token = await encrypt({ userId, email, role });

  const response = NextResponse.json({ success: true });
  response.cookies.set('session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, 
    path: '/',
  });

  return response;
}
