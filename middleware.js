// middleware.js - Pure Web API version (no Next.js required)
export default function middleware(request) {
  const allHeaders = Object.fromEntries(request.headers);
  
  // Exclude Vercel internal headers
  const excludeHeaders = [
    'x-vercel-id',
    'x-vercel-ip-as-number',
    'x-vercel-ip-continent',
    'x-vercel-ip-country',
    'x-vercel-ip-latitude',
    'x-vercel-ip-longitude',
    'x-vercel-ip-timezone',
    'x-vercel-ja4-digest',
    'x-vercel-oidc-token',
    'x-vercel-proxy-signature',
    'x-vercel-deployment-url',
    'x-forwarded-for',
    'x-real-ip',
    'x-forwarded-host',
    'x-forwarded-proto',
    'x-vercel-proxied-for',
    'x-invocation-id',
    'forwarded'
  ];
  
  for (const header of excludeHeaders) {
    delete allHeaders[header];
  }
  
  // Log the request
  console.log({
    timestamp: new Date().toISOString(),
    method: request.method,
    url: request.url,
    path: new URL(request.url).pathname,
    query: Object.fromEntries(new URL(request.url).searchParams),
    headers: allHeaders
  });
  // Just pass through to your site - no redirect
  return fetch(request.url);
  
  // Redirect using native Web API Response
//   return new Response(null, {
//     status: 307,
//     headers: {
//       'Location': 'https://magnit.ru'
//     }
//   });
}
// export const config = { matcher: '/:path*' };
