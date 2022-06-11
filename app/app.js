const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const db = require("./src/db")
const router = require('./src/routes/Usuario.routes')
const app = express();

app.use(express.json());
app.use(cors())

app.use("/" , router)

const PORT = 3001

app.listen(PORT, () => {
    console.log(`se esta escuchando en el puerto ${PORT}`)
    db()
})

