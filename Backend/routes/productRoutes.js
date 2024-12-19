const express = require('express');
const router = express.Router();
const { Product } = require('../models/Product');

// CRUD
router.get('/', async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

router.post('/', async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

router.put('/:id', async (req, res) => {
  await Product.update(req.body, { where: { id: req.params.id } });
  res.json({ success: true });
});

router.delete('/:id', async (req, res) => {
  await Product.destroy({ where: { id: req.params.id } });
  res.json({ success: true });
});

module.exports = router;
