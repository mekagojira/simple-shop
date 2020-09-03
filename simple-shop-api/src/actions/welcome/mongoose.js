const { getModel } = require('../../models');

module.exports = async () => {
    const Test = getModel('test');
    const query = {};
    const select = '-__v';
    return Test.find(query).select(select).lean();
};
