import React from 'react';
import { Button, ButtonGroup, IconButton, Typography } from '@mui/material';
import { useCart } from '../Contexts/CartContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ButtonCart = ({data, isInCart}) => {
  const {addToCart, cart, increaseQuantity, decreaseQuantity} = useCart();
  const quantity = cart.find(item => item.name === data.name)?.quantity || 0;

  const handleIncrement = () => {
    increaseQuantity(data.name);
  }

  const handleDecrement = () => {
    decreaseQuantity(data.name);
  }

  return (
    !isInCart ? (
        <Button onClick={() => addToCart(data)} disableRipple
          sx={{padding: '0.3rem 1.2rem', borderRadius: '50rem', border: '1px solid hsl(14, 65%, 9%)', 
          color: 'secondary.rose900',margin: '0 auto', backgroundColor: 'white', 
          textTransform: 'none', fontSize: '0.9rem', display: 'flex', alignItems: 'center', 
          gap: {xs: '0.7rem', sm: '0.5rem'}, width: {xs: '55%',sm: "61%",}, position: 'absolute', top: '-2rem', left: '20%'}}
        >
          <AddShoppingCartIcon size="small" sx={{color: 'primary.main',fontSize: '1.3rem', padding: '0', margin: '0'}} />
          Add to Cart
        </Button>
    ) : (
      <ButtonGroup sx={{padding: '0.2rem 0.4rem', borderRadius: '50rem', 
        color: 'secondary.rose900',margin: '-1rem auto', backgroundColor: 'primary.main', 
        textTransform: 'none', display: 'flex', alignItems: 'center', 
        gap: '2rem', width: '55%', justifyContent: 'space-between', height: 'fit-content',  
        position: 'absolute', top: '-1rem', left: '20%'}}
      >

        <IconButton size='small' sx={{color: 'white'}} onClick={handleDecrement}>
          <RemoveIcon fontSize='small' />
        </IconButton>

        <Typography variant="body1" color='white' fontWeight={'medium'} fontSize={'1rem'} component="p">
          {quantity}
        </Typography>  
        
        <IconButton size='small' sx={{color: 'white'}} onClick={handleIncrement}>
          <AddIcon fontSize='small'/>
        </IconButton>
            
      </ButtonGroup>
    )
  )
}

export default ButtonCart;
