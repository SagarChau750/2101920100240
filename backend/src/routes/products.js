const express = require('express');
const router = express.Router();
const productService = require('../services/productService');

// Route to get products
router.get('/:categoryname/products', async (req, res) => {
  const { categoryname } = req.params;
  const { top, minPrice, maxPrice, sortBy, order, page = 1 } = req.query;

  if (!categoryname || !top || !minPrice || !maxPrice) {
    return res.status(400).json({ error: 'Missing required query parameters' });
  }

  try {
    const products = await productService.getProducts(categoryname, top, minPrice, maxPrice, sortBy, order, page);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Route to get product details
router.get('/:categoryname/products/:productid', async (req, res) => {
  const { categoryname, productid } = req.params;

  if (!categoryname || !productid) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  try {
    const product = await productService.getProductDetail(categoryname, productid);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product details' });
  }
});

module.exports = router;
