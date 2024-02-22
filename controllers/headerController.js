const headerHelper = require('../helpers/header');

function giveInfo(req, res) {
    res.status(200).json({ message: 'Welcome to the header controller' });
}

function setHeaderController(req, res) {
    let headers = [];
    for (const title in req.query) {
        const value = req.query[title];
        if (!title || !value) {
            headers.forEach(header => headerHelper.deleteHeader(header, res));
            return res.status(400).json({ error: 'Invalid query parameters' });
        }
        headerHelper.setHeader(title, value, res);
        headers.push(title);
    }
    if (Object.keys(req.query).length > 1){
        return res.status(200).json({ message: 'Headers set successfully' });
    }
    res.status(200).json({ message: 'Header set successfully' });
}

function getHeaderController(req, res) {
    const headerTitle = req.params.headerTitle;
    const result = headerHelper.getHeader(headerTitle, req);
    if (!result) {
        return res.status(404).json({ error: 'Header not found' });
    }
    res.status(200).json({ 'header value': result });
}

module.exports = {
    giveInfo,
    setHeader: setHeaderController,
    getHeader: getHeaderController
};