const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    username: String,
    userApellido: String,
    email: String,
    password: String
})


userSchema.method.encriptar = ( password ) => {
const salt =  bcrypt.genSalt(10);
return bcrypt.hash(password, salt);
}

userSchema.method.validarPass = function(password) {
    bcrypt.compare(password, this.password);
}

module.exports = model('User', userSchema);