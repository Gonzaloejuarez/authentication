const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/Usuario");

const getLogin = async (req,res) => {
const { email , password } = req.body

Usuario.findOne({ email }).then((usuario) => {
    if(!usuario) {
        return res.json({msj : "No existe un usuario con ese Email"})
    }
    bcrypt.compare(password, usuario.password).then((passwordCorrecta) => {
        if(passwordCorrecta){
            const { id , name} = usuario;

            const data = {
                id,
                name,
            };

            const token = jwt.sign(data , "secret", {
                expiresIn : 86400
            });

            res.json({
                msj : "Usuario logueado correctamente",
                usuario : {
                    id,
                    name,
                    token
                },
            });
        }else{
            return res.json({msh : "Contrase;a incorrecta"})
        }
    })
})
}

module.exports = getLogin
