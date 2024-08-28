// src/components/Filters.js
import React from 'react';
import { TextField, MenuItem, Button, Grid } from '@mui/material';

const Filters = ({ filters, onChange }) => {
  const handleFilterChange = (e) => {
    onChange({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Category"
          name="category"
          select
          fullWidth
          value={filters.category}
          onChange={handleFilterChange}
        >
          {/* Populate categories */}
          <MenuItem value="Phone">Phone</MenuItem>
          <MenuItem value="Laptop">Laptop</MenuItem>
          {/* Add more categories */}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Company"
          name="company"
          select
          fullWidth
          value={filters.company}
          onChange={handleFilterChange}
        >
          {/* Populate companies */}
          <MenuItem value="AMZ">AMZ</MenuItem>
          <MenuItem value="FLP">FLP</MenuItem>
          {/* Add more companies */}
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Min Price"
          name="minPrice"
          type="number"
          fullWidth
          value={filters.minPrice}
          onChange={handleFilterChange}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Max Price"
          name="maxPrice"
          type="number"
          fullWidth
          value={filters.maxPrice}
          onChange={handleFilterChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={() => onChange(filters)}>
          Apply Filters
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filters;
