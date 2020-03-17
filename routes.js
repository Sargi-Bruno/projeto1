const { Router } = require('express')

const routes = new Router()

const Gpio = require('onoff').Gpio
const led = new Gpio(4, 'out')

routes.post('/ascender', (req, res) => {
    led.writeSync(1)
    res.json({ 'status' : 'OK', 'data' : 'Led aceso' })
})

routes.post('/apagar', (req, res) => {
    led.writeSync(0)
    res.json({ 'status' : 'OK', 'data' : 'Led apagado' })
})

module.exports = routes