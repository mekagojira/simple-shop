const mongoose = require('mongoose');
const { test } = require('./_schemaNames');

const schema = new mongoose.Schema({
    name: String,
    created_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model(test, schema, test);
