import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box p={4} textAlign="center">
      <Typography variant="h2" gutterBottom>
        Welcome to Top Products
      </Typography>
      <Typography variant="h5" paragraph>
        Discover the best products from various e-commerce platforms. Explore top-rated products, filter by category, price range, and more.
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        component={Link} 
        to="/products"
      >
        View All Products
      </Button>
    </Box>
  );
};

export default HomePage;
