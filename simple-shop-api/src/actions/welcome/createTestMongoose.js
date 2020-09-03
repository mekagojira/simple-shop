const { getModel } = require('../../models');

module.exports = async (name = 'new') => {
    const Test = getModel('test');
    const doc = new Test({ name });
    const saved = await doc.save();
    return saved.toJSON();
};
