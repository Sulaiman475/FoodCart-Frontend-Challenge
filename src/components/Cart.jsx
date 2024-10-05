import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react';
import { useCart } from '../Contexts/CartContext';
import CartProductItem from './CartProductItem';
import ModalWindow from './ModalWindow';

const Cart = () => {
  const {cart} = useCart();

  const totalCartPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0);

  const totalCartQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity
  }, 0);

  return (
    <Card sx={{flex: {md: '28%'}, width: {xs: '100%', sm: '95%'}, padding: '0.7rem', paddingBottom: '0.5rem', margin: '1.2rem 1.2rem 0 0', borderRadius: '8px', color: 'primary.main'}}>
      
      <CardContent sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
        <Typography variant="h1" sx={{fontSize: '1.5rem', fontWeight: 'bold'}}>Your Cart ({totalCartQuantity})</Typography>
        {cart.length === 0 && (<>
          <CardMedia
            component="img"
            height="auto"
            width="10%"
            sx={{
                borderRadius: '7px',
                width: '40%',
                margin: '1.6rem auto',
            }}
            image={"/images/illustration-empty-cart.svg"}
            alt="Paella dish"
          />
          <Typography variant="body1" sx={{fontSize: '1rem', fontWeight: 'medium', 
            color: 'secondary.rose400', textAlign: 'center'}} >
            Your added items will appear here
          </Typography>
        </>)}

        {cart.length > 0 && (<>
          <Box>
            {cart.map((item) => (
              <CartProductItem key={item.name} item={item} />
            ))}

            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.3rem'}}>
              <Typography sx={{fontSize: '0.9rem', fontWeight: 'medium', color: 'secondary.rose400'}}>
                Order Total
              </Typography>
              <Typography sx={{fontSize: '1.6rem', fontWeight: 'bold', color: 'secondary.rose900'}}>
                ${totalCartPrice.toFixed(2)}
              </Typography>
            </Box>
          </Box>

          <Box sx={{display: "flex", alignItems: 'center', justifyContent: 'center', gap: "0.5rem", 
            padding: '0.7rem 0.5rem', backgroundColor: 'secondary.rose100', borderRadius: '3px', margin: '0.5rem 0'}}
          >
            <img src="/images/icon-carbon-neutral.svg" alt="Carbon Natural" width={"20px"} height={"20px"} />
            <Typography sx={{fontSize: '1rem', color: 'secondary.rose500'}}>
              This is a <span style={{color: 'black'}}>carbon-neutral</span> delivery
            </Typography>
          </Box>

          <ModalWindow />
        </>)}

      </CardContent>

    </Card>
  )
}

export default Cart;
