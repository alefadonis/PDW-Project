import { decrypt } from '@/app/lib/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  console.log('Middleware triggered:', req.nextUrl.pathname);

  const token = req.cookies.get('session')?.value;
  console.log('Token:', token);

  if (!token) {
    console.log('No token found, redirecting...');
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    const session = await decrypt(token);
    console.log('Decrypted Session:', session);

    if (!session) {
      console.log('Invalid session, redirecting...');
      return NextResponse.redirect(new URL('/login', req.url));
    }
  } catch (error) {
    console.error('Decryption failed:', error);
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/wyr/:path*', '/((?!login).*)'], 
};
