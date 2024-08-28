const axios = require('axios');
const { API_URL, TOKEN } = require('../config');

const fetchProductsFromEcommerce = async (company, category, top, minPrice, maxPrice) => {
  try {
    const response = await axios.get(`${API_URL}/${company}/categories/${category}/products`, {
      params: { top, minPrice, maxPrice },
      headers: { Authorization: `Bearer ${TOKEN}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

const getProducts = async (category, top, minPrice, maxPrice, sortBy, order, page) => {
  const companies = ['AMZ', 'FLP', 'SNP', 'MYN', 'AZO'];
  let allProducts = [];

  for (const company of companies) {
    const products = await fetchProductsFromEcommerce(company, category, top, minPrice, maxPrice);
    allProducts = allProducts.concat(products);
  }

  // Sort and paginate
  allProducts.sort((a, b) => {
    if (sortBy === 'price') return order === 'asc' ? a.price - b.price : b.price - a.price;
    if (sortBy === 'rating') return order === 'asc' ? a.rating - b.rating : b.rating - a.rating;
    if (sortBy === 'discount') return order === 'asc' ? a.discount - b.discount : b.discount - a.discount;
    return 0;
  });

  const perPage = top > 10 ? top : allProducts.length;
  const paginatedProducts = allProducts.slice((page - 1) * perPage, page * perPage);

  // Add unique IDs to products
  paginatedProducts.forEach((product, index) => {
    product.uniqueId = `${category}-${page}-${index}`;
  });

  return paginatedProducts;
};

const getProductDetail = async (category, productId) => {
  const companies = ['AMZ', 'FLP', 'SNP', 'MYN', 'AZO'];
  let productDetail = null;

  for (const company of companies) {
    const products = await fetchProductsFromEcommerce(company, category, 10, 0, Infinity);
    productDetail = products.find(product => product.uniqueId === productId);
    if (productDetail) break;
  }

  return productDetail;
};

module.exports = {
  getProducts,
  getProductDetail
};
