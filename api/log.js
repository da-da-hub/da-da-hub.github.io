export default function handler(req, res) {
    const headers = req.headers;
    
    console.log({
        timestamp: new Date().toISOString(),
        ip: headers['x-forwarded-for'] || headers['x-real-ip'],
        user_agent: headers['user-agent'],
        referer: headers['referer'] || 'Direct',
        accept_language: headers['accept-language'],
        url: req.url
    });
    
    res.status(200).json({ status: 'logged' });
}
