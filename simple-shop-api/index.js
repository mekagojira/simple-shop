#!/usr/bin/env node

require('dotenv').config({
    path: process.env.NODE_ENV === 'prod' ? '.env' : '.env.dev',
})
const app = require('./src/app')
const http = require('http')
const config = require('./src/app.config')
const port = config.PORT
app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

function normalizePort(val) {
    const port = parseInt(val, 10)

    if (isNaN(port)) {
        return val
    }

    if (port >= 0) {
        return port
    }

    return false
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error
    }

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges')
            process.exit(1)
            break
        case 'EADDRINUSE':
            console.error(bind + ' is already in use')
            process.exit(1)
            break
        default:
            throw error
    }
}

function onListening() {
    console.log('App: ' + config.APP_NAME)
    console.log('Listening on http://127.0.0.1:' + port)
}
