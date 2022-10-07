const express = require('express');
const app = express();
const port = process.env.PORT || 3000

const especialidades = require("./src/data/especialidades.json")

app.get("/especialidades", (req,res) => {
    return res.json(especialidades)
})

app.listen(port, () => {
    console.log("Servidor está rodando...")
})