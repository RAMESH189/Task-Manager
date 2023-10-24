const errorHandler = (err, req, res, next) => {
    return res.status(500).json({ mesg: err });
}

module.exports = errorHandler;