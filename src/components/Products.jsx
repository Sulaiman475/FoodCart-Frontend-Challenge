import { Box, Typography } from '@mui/material'
import React from 'react'
import ProductItem from './ProductItem';
import data from '../data/data.json';

const Products = () => {

  return (
    <Box component="section" sx={{flex: {md: '68%'}}}>
        <Typography variant="h1" sx={{fontSize: '2.7rem', fontWeight: 'bold', mb: '2rem'}}>Deserts</Typography>
        <Box sx={{display: 'flex', gap: '2rem', flexWrap: 'wrap', flexDirection: {xs: 'column', sm: 'row'}}}>
          {data.map((item) => (
            <ProductItem key={item.name} item={item} />
          ))}
        </Box>
    </Box>
  )
}

export default Products;
