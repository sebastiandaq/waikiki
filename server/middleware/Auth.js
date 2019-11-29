const jwt = require('jsonwebtoken')
const Usuario = require('../models/userModel')

const Auth = async(req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '')
    const data = jwt.verify(token, "fo0d1E5U4d3cuwOqmLHkPzk7m4x")
    try {
        const user = await Usuario.findOne({ _id: data._id, 'tokens.token': token })
        if (!user) {
            throw new Error()
        }
        req.Usuario = user
        req.token = token
        next()
    } catch (error) {
        res.status(400).send({ codigo: 400, error:'Token incorrecto', mensaje: 'Acceso no permitido' })
    }

}
module.exports = Auth
