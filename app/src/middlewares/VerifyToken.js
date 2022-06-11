const jwt = require ("jsonwebtoken");

const veryfyToken = async (req,res,next) => {
    const token = req.headers["token"];

    if(token){
        jwt.verify(token, "secret", (error, data) => {
            if ( error ) return res.status(400).json({msj : "Token invalido"})
            else{
                req.user = data;
                next()
            }
        });
        }
        else{
            res.status(400).json({msj : "Debes enviar un token"})
    }
};

module.exports = veryfyToken