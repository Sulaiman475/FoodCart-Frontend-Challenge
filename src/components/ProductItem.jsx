import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from './Button';
import { useCart } from '../Contexts/CartContext';



export default function ProductItem({item}) {
  // console.log(item);
  const {name, category, price, image} = item;
  const {cart} = useCart();

  const isInCart = cart.some((item) => item.name === name);

  return (
    <Card sx={{ maxWidth: {lg: "30%", md: "45%", sm: "45%", xs: "100%"}, backgroundColor: 
      'transparent', boxShadow: 'none'}}
    >

      <CardMedia
        component="img"
        height="auto"
        width="20%"
        sx={{
          borderRadius: '7px',
          border: `${isInCart ? '2px solid hsl(14, 86%, 42%)' : 'none'}`,
        }}
        image={image.desktop}
        alt="Paella dish"
      />

      <CardContent sx={{paddingLeft: '0', margin: '1rem 0', position: 'relative'}}>
        <Button data={item} isInCart={isInCart}/>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>
          {category}
        </Typography>

        <Typography variant="h5" sx={{ color: 'secondary.rose900', margin: '0.2rem 0', 
          fontSize: '1.1rem', fontWeight: 'medium' }}>
            {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'primary.main', fontSize: '1.1rem', 
          fontWeight: 'medium' }}>
            ${price.toFixed(2)}
        </Typography>
      </CardContent>

    </Card>
  );
}
