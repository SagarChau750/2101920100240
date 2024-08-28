// src/pages/AllProducts.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
import { Container, Typography } from '@mui/material';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', company: '', minPrice: '', maxPrice: '' });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}`, {
          params: {
            ...filters,
            top: 10,
            page
          }
        });
        setProducts(response.data.products);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [filters, page]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setPage(1);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>All Products</Typography>
      <Filters filters={filters} onChange={handleFilterChange} />
      <ProductList products={products} />
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </Container>
  );
};

export default AllProducts;
