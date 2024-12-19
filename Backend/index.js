const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/products', productRoutes);

db.sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
});
