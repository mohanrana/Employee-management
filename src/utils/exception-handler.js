const router = require('express').Router();

exports.ExceptionHandler = (err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    });
};
