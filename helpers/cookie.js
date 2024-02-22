function setCookie(title, value, httpOnlyValue, res) {
    res.cookie(title, value, { httpOnly: httpOnlyValue });
}

function getCookie(title, req) {
    return req.cookies[title];
}

function deleteCookie(title, res) {
    res.clearCookie(title);
}

module.exports = {
    setCookie,
    getCookie,
    deleteCookie
};