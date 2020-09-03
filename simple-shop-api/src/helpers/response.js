const staticCode = require('../app.static');

const sendSuccess = (req, res) => (data) => {
    const response = {
        success: true,
        message: data || {},
        code: staticCode.SUCCESS,
    };

    res.status(200).json(response);
};

const sendError = (req, res) => (err) => {
    const { message, status, code } = err;
    if (code !== staticCode.NOT_FOUND) console.log(err);
    const response = {
        success: false,
        message: message,
        code: code,
    };

    res.status(status || 200).json(response);
};

exports.sendResponse = (req, res) => async (func) => {
    try {
        const data = await func;
        console.log(data);
        return sendSuccess(req, res)(data);
    } catch (e) {
        return sendError(req, res)(e);
    }
};

exports.sendSuccess = sendSuccess;

exports.sendError = sendError;
