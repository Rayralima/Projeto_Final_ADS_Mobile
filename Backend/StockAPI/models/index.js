const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('.');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', 
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.Product = require('./Product')(sequelize, Sequelize);

module.exports = db;

const app = express();
app.use(bodyParser.json());
app.use(cors());


const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);


db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
});
