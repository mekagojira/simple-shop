const mongoose = require('mongoose');
const { mongoUri } = require('../app.config');

exports.connect = () => {
    mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(r => console.log(`MongoDB connected successfully: ${mongoUri}`));
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'Mongodb connection error:'));

    return { db, mongoose };
};

exports.getModel = (modelName) => {
    return require(`./${modelName}.model`);
};
