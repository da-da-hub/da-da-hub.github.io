export default function middleware(request) {
  const allHeaders = Object.fromEntries(request.headers);
  

  delete allHeaders['x-forwarded-for'];
  delete allHeaders['x-real-ip'];


  console.log({
    timestamp: new Date().toISOString(),
    method: request.method,
    url: request.url,
    path: new URL(request.url).pathname,
    query: Object.fromEntries(new URL(request.url).searchParams),
    headers: allHeaders,
  });
}


export const config = { matcher: '/:path*' };
