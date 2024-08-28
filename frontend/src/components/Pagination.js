// src/components/Pagination.js
import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

const Pagination = ({ page, totalPages, onPageChange }) => {
  return (
    <MuiPagination
      count={totalPages}
      page={page}
      onChange={(event, value) => onPageChange(value)}
      color="primary"
    />
  );
};

export default Pagination;
