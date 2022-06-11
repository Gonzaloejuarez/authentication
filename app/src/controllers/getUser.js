const Usuario = require('../models/Usuario');


const getUser = (req,res) => {
    const {id} = req.user

    if(id.length === 24){
        Usuario.findById(id).then((usuario) => {
            if(!usuario){
                return res.json({
                    msj : "No se encontro ningun usuario"
                })
            } else {
                const { _id, password, __v, ...resto } = usuario._doc;
                res.json(resto);
              }
        })
    }else{
        res.json({msj : "Esta enviando la password equivocada"})
    }
}

module.exports = getUser
