const { user,role } = require('../model');

module.exports = {
    getByEmailAndPassword: async (email, password) => {
        return await user.findOne({
            attributes: ["user_id", "name", "email"],
            where: {
                email,
                password,
            },
        });
    }
}