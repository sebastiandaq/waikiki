const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const Auth = async(req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '')
    const data = jwt.verify(token, process.env.JWT_KEY)
    try {
        const User = await User.findOne({ _id: data._id, 'tokens.token': token })
        if (!User) {
            throw new Error()
        }
        req.User = User
        req.token = token
        next()
    } catch (error) {
        res.status(400).send({ codigo: 400, error:'Token incorrecto', mensaje: 'Acceso no permitido' })
    }

}
module.exports = Auth