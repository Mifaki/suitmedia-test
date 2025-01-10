import { type NextRequest, NextResponse } from 'next/server';
import getBaseUrl from './shared/util/getBaseUrl';

export async function middleware(request: NextRequest) {
  const baseUrl = getBaseUrl();
  const pathname = request.nextUrl.pathname.replace(baseUrl, '').split('?')[0];

  // Direct user to /home
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
