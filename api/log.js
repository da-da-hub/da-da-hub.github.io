export default function handler(req, res) {
    const headers = req.headers;
    
    console.log({
        timestamp: new Date().toISOString(),
        ip: headers['x-forwarded-for'] || headers['x-real-ip'],
        user_agent: headers['user-agent'],
        referer: headers['referer'] || 'Direct',
        accept_language: headers['accept-language']
    });

    res.writeHead(302, { Location: '/' });
    res.end();
}
