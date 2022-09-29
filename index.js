const express = require("express");

const app = express();

app.get('/me', (request, response) => {
    response.status(200).json({
        message: 'Jose 27 peru',
        verb: request.method
    })
})

app.post('/metas', (request, response) => {
    response.status(200).json({
        message: 'leer, jugar videojuegos y dibujar',
        verb: request.method
    })
})
app.patch('/metas', (request, response) => {
    response.status(200).json({
        message: 'ser un pro y crear apps',
        verb: request.method
    })
})


app.put('/business', (request, response) => {
    response.status(200).json({
        message: 'globant, google, amazon',
        verb: request.method
    })
})

app.listen(9400, () => {
    console.log('Inciado en 9400')
})
