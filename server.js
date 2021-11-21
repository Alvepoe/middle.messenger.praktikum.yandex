const express = require('express');
const path = require('path');

const PORT = 3000;

const server = express()

server.use('/', express.static(path.join(__dirname, 'dist')))

server.listen(PORT, () => console.log(`Сервер на ${PORT} порту`))