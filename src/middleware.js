export function middleware(request) {
  const url = request.nextUrl;
  
  const response = NextResponse.next();
  response.headers.set('X-Middleware-Executed', 'true');
  response.headers.set('X-Path', url.pathname);
  
  console.log({
    timestamp: new Date().toISOString(),
    fullUrl: url.href,
    pathname: url.pathname,
    search: url.search,
    method: request.method,
    ip: request.headers.get('x-forwarded-for') || 'unknown',
    userAgent: request.headers.get('user-agent'),
    queryParams: Object.fromEntries(url.searchParams),
  });
  
  return response;
}

export const config = {
  matcher: '/:path*',
};
