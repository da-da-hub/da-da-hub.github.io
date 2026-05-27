export default function handler(req, res) {
    const allHeaders = req.headers;
    
    console.log({
        timestamp: new Date().toISOString(),
        method: req.method,
        url: req.url,
        all_headers: allHeaders,
        headers_list: Object.keys(allHeaders).map(key => ({
            [key]: allHeaders[key]
        }))
    });

    res.status(200).json({ status: 'logged' });
}
