const express = require('express')
const Pedido = require('../models/cartModel')
const Auth = require('../middleware/Auth')

const Router = express.Router()

Router.post('/carts', Auth, async (req, res) => {
    // CREA UN NUEVO Cart
    try {
      console.log("creando pedido: " + req.body)

        const pedido = new Pedido(req.body)
        await pedido.save()
        res.status(200).send({ codigo: 200, mensaje:'Nueva Compra OK' })
    } catch (error) {
      console.log("pedido error: " + error)
        res.status(400).send({ codigo: 400, mensaje: 'Error al registrar pedido', error })
    }
})

Router.get('/carts/:userId', Auth, async(req, res) => {
  console.log("buscando pedidos de: " + req.params.userID)

  try {
    const pedidos = await Pedido.find({userId: req.params.userID})
    if (!pedidos) {
        return res.status(204).send({codigo: 204, error: 'No hay pedidos'})
    }
    res.send({ codigo: 201, mensaje: 'Pedidos Encontradas', pedidos })
} catch (error) {
    res.status(400).send({ codigo: 400, mensaje: 'Error en la búsqueda, intente nuevamente', error })
}
})

module.exports = Router
