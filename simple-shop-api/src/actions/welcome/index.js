const staticCode = require('../../app.static');

exports.ping = async (message = 'Hello world!') => {
    return message;
};

exports.notFound = async () => {
    const err = new Error('API not found');
    err.code = staticCode.NOT_FOUND;
    err.status = 404;

    throw err;
};

const mongoose = require('./mongoose');
exports.mongoose = async () => {
    return mongoose();
};

const createTestMongoose = require('./createTestMongoose');
exports.createTestMongoose = async (name) => {
    return createTestMongoose(name);
};
