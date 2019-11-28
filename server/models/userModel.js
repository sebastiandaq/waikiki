const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({error: 'No es una dirección de email'})
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

usuarioSchema.set('timestamps', true);

usuarioSchema.pre('save', async function (next) {
    // PASSWORD HASH ANTES DE GRABAR EL USUARIO
    const usuario = this
    if (usuario.isModified('password')) {
        usuario.password = await bcrypt.hash(usuario.password, 8)
        console.log("user's password: " + usuario.password)
    }
    next()
})

usuarioSchema.methods.generateAuthToken = async function() {
    // CREA UN TOKEN DE AUTENTICACION PARA EL USUARIO
    const usuario = this
    const token = jwt.sign({_id: usuario._id}, "fo0d1E5U4d3cuwOqmLHkPzk7m4x")
    usuario.tokens = usuario.tokens.concat({token})
    await usuario.save()
    return token
}

usuarioSchema.statics.findByCredentials = async (email, password) => {
    // BUSCAR USUARIO POR EMAIL Y PASSWORD
    const usuario = await Usuario.findOne({email} )
    if (!usuario) {
        throw new Error({ error: 'Email no registrado en la app' })
    }
    const isPasswordMatch = await bcrypt.compare(password, usuario.password)
    if (!isPasswordMatch) {
        throw new Error({ error: 'El email y el password no coinciden' })
    }
    return usuario
}

const Usuario = mongoose.model('Usuario', usuarioSchema)

module.exports = Usuario
