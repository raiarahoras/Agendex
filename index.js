const express = require('express');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const {Sequelize, DataTypes, Model} =  require('sequelize');

const especialidades = require("./src/data/especialidades.json")

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage: './database.sqlite',
    logging: true
})

const User = sequelize.define('User', {
    nome: {
    type: DataTypes.STRING,
    allowNull: false
    },
    nascimento: {
    type: DataTypes.DATE
    }
   }, { // Outras configurações
});


app.use(cors());

app.get("/especialidades", (req,res) => {
    return res.json(especialidades)
})

app.listen(port, () => {
    console.log("Servidor está rodando...")
})