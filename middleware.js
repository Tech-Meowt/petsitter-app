import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  
  const { data: { user } } = await supabase.auth.getUser();

  if (user && req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/client/dashboard', req.url))
  }

  if (!user && req.nextUrl.pathname === '/client/dashboard') {
    return NextResponse.redirect(new URL('/log-in', req.url))
  }

  return res

}

export const config = {
  matcher: [
    '/',
    '/client/dashboard',
  ],
};
