const bcrypt = require("bcrypt")
const Usuario = require('../models/Usuario');

const getRegister = (req,res) => {
const { name , email , password } = req.body //esto es lo que el usuario va a ingresar

Usuario.findOne({email}).then((usuario)=> { //seleccionamos email
    if(usuario){ 
        return res.json({msj : "Ya existe un usuario con ese Email"})
    }else if(!name || !email || !password){
        return res.json({msj : "Debe completar los campos"})
    }else{
        bcrypt.hash(password, 10, (error, passwordHasheada) => {
            if ( error ) res.json({error});
            else {
                const newUser = new Usuario({
                    name, 
                    email,
                    password : passwordHasheada
                })
                newUser.save().then((usuario) => {
                    res.json({msg : " Usuario creado Correctamente" , usuario})
                }).catch((error) => console.error(error))
            }
        })
    }
}) 
}

module.exports = getRegister
