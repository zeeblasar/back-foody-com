const { users } = require('../../../db/user.db');

const login = (email,password) =>{
    if(email && password){
        return users.find(user => user.email == email && user.password == password);
    }
    console.log(email);
    console.log(password);

    return null;
}

module.exports = { login };