// src/components/ProductList.js
import React from 'react';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';

const ProductList = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map(product => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={`https://via.placeholder.com/150?text=${product.name}`}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography color="textSecondary">Company: {product.company}</Typography>
              <Typography color="textSecondary">Price: ${product.price}</Typography>
              <Typography color="textSecondary">Rating: {product.rating}</Typography>
              <Typography color="textSecondary">Discount: {product.discount}%</Typography>
              <Typography color="textSecondary">Availability: {product.availability}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
