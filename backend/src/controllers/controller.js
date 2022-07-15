const { Router, json} = require('express');
const user = require('../models/User');
const router = Router();
const User = require('../models/User');

const jwt = require('jsonwebtoken');
const config = require('../config');

router.post('/registro', (req, res, next) => {
    const {usename, useApellido, email, password} = req.body;
    User.create({
        username,
         userApellido,
        email,
        password

    })
    user.password =  user.encriptar(user.password);
    user.save();
    const token = jwt.sign({id: user._id}, config.secret,{
        expiresIn: 60 * 60 *24
    })
    res.json({auth: true,token: token})
})
router.post('/login',  (req, res, next) => {
const{ email, password} = req.body;
const user =  User.findOne({email: email});
if(!user){
    return res.status(404).send('El mail no esta registrado');
}
const passValida = user.validarPass(password);
if(!passValida){
   return res.status(401).json({auth: false, token: null});
}
const token = jwt.sign({id: user._id},config.secret,{
    expiresIn: 60 * 60 * 24
});
res.json({auth: true, token});

})

router.get('/sesiones', (req, res, next) => {
    const token = req.headers['x-access-token'];
    if(!token){
        return  res.status(401).json({
            auth: false,
            message: 'No esta autorizado'
        });
    }
   const autorizado = json.verify(token, config.secret);
    const user = User.findById(autorizado.id);
    if (!user){
        return res.status(404).send('Usuario No Encontrado'); 
    }
    res.json(user);
})

module.exports = router;