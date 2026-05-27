export default function handler(req, res) {
    const allHeaders = req.headers;
    const safeHeaders = { ...allHeaders };
    delete safeHeaders['x-forwarded-for'];
    delete safeHeaders['x-real-ip'];
    delete safeHeaders['cf-connecting-ip'];
    delete safeHeaders['true-client-ip'];
    
    console.log({
        timestamp: new Date().toISOString(),
        method: req.method,
        url: req.url,
        headers: safeHeaders
    });

    const targetUrl = 'https://magnit.ru';

    res.writeHead(302, { 
        'Location': targetUrl,
        'Cache-Control': 'no-cache, no-store, must-revalidate'
    });
    res.end();
}
