const express = require('express')
const Usuario = require('../models/userModel')
const Auth = require('../middleware/Auth')

const Router = express.Router()

Router.post('/users', async (req, res) => {
    // CREA UN NUEVO User
    try {
      console.log(req.body)
        const Usuario = new Usuario(req.body)
        await Usuario.save()
        const token = await Usuario.generateAuthToken()
        res.status(200).send({ codigo: 200, mensaje:'Registro OK', Usuario, token })
    } catch (error) {
      console.log("register error: " + error)
        if(error.code == 11000)
        res.status(400).send({ codigo: 400, mensaje: 'Email ya usado', error })
        res.status(400).send({ codigo: 400, mensaje: 'Error al registrar', error })
    }
})

Router.post('/users/login', async(req, res) => {
    // ACCESO DE UserS REGISTRADOS
    try {
        const { email, password } = req.body
        const Usuario = await Usuario.findByCredentials(email, password)
        if (!Usuario) {
            return res.status(400).send({codigo: 400, error: 'Error! Verifique sus credenciales'})
        }
        const token = await Usuario.generateAuthToken()
        res.send({ codigo: 200, mensaje: 'Inicio de sesión exitoso', Usuario, token })
    } catch (error) {
      console.log("login error: " + error)
        res.status(400).send({ codigo: 400, mensaje: 'Error durante el login' })
    }
})

Router.get('/users/account', Auth, async(req, res) => {
    // VER EL User CON SESION ABIERTA
    res.send(req.Usuario)
})

Router.post('/users/account/logout', Auth, async (req, res) => {
    // CERRAR SESION DEL USUARIO
    try {
        req.Usuario.tokens = req.Usuario.tokens.filter((token) => {
            return token.token != req.token
        })
        await req.Usuario.save()
        res.status(200).send({codigo: 200, mensaje: 'Sesion cerrada'})
    } catch (error) {
        res.status(400).send({codigo: 400, mensaje: 'Error al cerrar sesión', error})
    }
})

module.exports = Router
