const cookieHelper = require('../helpers/cookie');

function giveInfo(req, res) {
    res.status(200).json({ message: 'Welcome to the cookie controller' });
}

function setCookieController(req, res) {
    let cookies = [];
    for (const title in req.query) {
        const value = req.query[title];
        if (!title || !value) {
            cookies.forEach(cookie => cookieHelper.deleteCookie(cookie, res));
            return res.status(400).json({ error: 'Invalid query parameters' });
        }
        cookieHelper.setCookie(title, value, true, res);
        cookies.push(title);
    }
    if (Object.keys(req.query).length > 1){
        return res.status(200).json({ message: 'Cookies set successfully' });
    }
    res.status(200).json({ message: 'Cookie set successfully' });
}

function getCookieController(req, res) {
    const cookieTitle = req.params.cookieTitle;
    const result = cookieHelper.getCookie(cookieTitle, req);
    if (!result) {
        return res.status(404).json({ error: 'Cookie not found' });
    }
    res.status(200).json({ 'cookie value': result });
}

module.exports = {
    giveInfo,
    setCookie: setCookieController,
    getCookie: getCookieController
};