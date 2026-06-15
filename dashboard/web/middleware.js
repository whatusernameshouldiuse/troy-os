import { NextResponse } from 'next/server';

// Basic-auth gate. Active only when BOARD_PASSWORD is set (so localhost stays open).
export function middleware(req) {
  const pass = process.env.BOARD_PASSWORD;
  if (!pass) return NextResponse.next();

  const user = process.env.BOARD_USER || 'troy';
  const header = req.headers.get('authorization') || '';
  if (header.startsWith('Basic ')) {
    try {
      const decoded = atob(header.slice(6));
      const i = decoded.indexOf(':');
      const u = decoded.slice(0, i);
      const p = decoded.slice(i + 1);
      if (u === user && p === pass) return NextResponse.next();
    } catch {}
  }
  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Mission Board"' },
  });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
