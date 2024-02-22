function setHeader(title, value, res) {
    res.setHeader(title, value);
}

function getHeader(title, req) {
    return req.get(title);
}

function deleteHeader(title, res) {
    res.removeHeader(title);
}

module.exports = {
    setHeader,
    getHeader,
    deleteHeader
};