// src/components/Pagination.js
import React from 'react';
import { Pagination as MuiPagination, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../store';

export const Pagination = () => {
  const dispatch = useDispatch();
  const { data, currentPage } = useSelector((state) => state.posts);
  const totalPages = Math.ceil(data.length / 6);

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={(event, page) => dispatch(setCurrentPage(page))}
        color="primary"
      />
    </Box>
  );
};
