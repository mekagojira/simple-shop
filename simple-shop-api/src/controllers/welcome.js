const welcome = require('../actions/welcome');
const { sendResponse } = require('../helpers/response');

const resp = (req, res) => sendResponse(req, res);

exports.ping = async (req, res) => {
    return resp(req, res)(welcome.ping('Hello world!'));
};

exports.notFound = async (req, res) => {
    return resp(req, res)(welcome.notFound());
};

exports.mongoose = async (req, res) => {
    return resp(req, res)(welcome.mongoose());
};

exports.createTestMongoose = async (req, res) => {
    const { name } = { ...req.body };
    return resp(req, res)(welcome.createTestMongoose(name));
};
