export function middleware(request) {
  console.log({
    timestamp: new Date().toISOString(),
    url: request.url,
    method: request.method,
    path: new URL(request.url).pathname,
    ip: request.headers.get('x-forwarded-for') || 'unknown',
    userAgent: request.headers.get('user-agent'),
    referer: request.headers.get('referer') || 'Direct',
    country: request.headers.get('x-vercel-ip-country') || 'unknown',
    city: request.headers.get('x-vercel-ip-city') || 'unknown',
    // All headers (optional - this logs everything)
    allHeaders: Object.fromEntries(request.headers)
  });
}
export const config = {
  matcher: '/:path*', 
};
