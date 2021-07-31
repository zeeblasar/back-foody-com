const user = require('./user');
const role = require('./role');

user.belongsTo(role, {
    foreignKey: "role_id",
});


module.exports = {
    user,
    role
}