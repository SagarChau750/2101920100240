const axios = require('axios');
const { API_BASE_URL } = process.env;

// Function to get products from the external API
exports.getTopProducts = async (req, res) => {
  try {
    const { categoryname } = req.params;
    const { top, minPrice, maxPrice, sortBy, page = 1 } = req.query;

    const response = await axios.get(`${API_BASE_URL}/${categoryname}/products`, {
      params: {
        top,
        minPrice,
        maxPrice,
        sortBy,
        page
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Function to get product details from the external API
exports.getProductById = async (req, res) => {
  try {
    const { categoryname, productid } = req.params;

    const response = await axios.get(`${API_BASE_URL}/${categoryname}/products/${productid}`);

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching product details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
