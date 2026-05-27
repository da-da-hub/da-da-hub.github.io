import { NextResponse } from 'next/server';

export function middleware(request) {
  const allHeaders = Object.fromEntries(request.headers);
  
  delete allHeaders['x-forwarded-for'];
  delete allHeaders['x-real-ip'];
  
  console.log({
    timestamp: new Date().toISOString(),
    method: request.method,
    url: request.url,
    path: request.nextUrl.pathname,
    query: Object.fromEntries(request.nextUrl.searchParams),
    headers: allHeaders
  });
  
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
