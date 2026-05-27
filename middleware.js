export default function middleware(request) {
  const allHeaders = Object.fromEntries(request.headers);
  
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
  
  console.log({
    timestamp: new Date().toISOString(),
    method: request.method,
    url: request.url,
    path: new URL(request.url).pathname,
    query: Object.fromEntries(new URL(request.url).searchParams),
    headers: allHeaders
  });
}

export const config = { matcher: '/:path*' };
