import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import { useCart } from '../Contexts/CartContext';

const CartProductItem = ({item}) => {
    const {name, quantity, price} = item;
    const {removeProductFromCart} = useCart()

    const removeFromCart = function() {
        removeProductFromCart(name)
    }

  return (
    <Box sx={{padding: '0.7rem 0', borderBottom: '2px solid hsl(13, 31%, 94%)', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>

        <Box sx={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', 
            flexDirection: 'column',}}>
            <Typography sx={{color: 'secondary.rose900', fontWeight: 'medium', fontSize: '0.9rem'}}>
                {name}
            </Typography>

            <Box sx={{display: 'flex', alignItems: 'center', gap: '0.7rem'}}>
                <Typography sx={{fontSize: '01rem', fontWeight: 'bold'}}>{quantity}x</Typography>
                <Typography sx={{fontSize: '0.9rem', fontWeight: 'medium', color: 'secondary.rose400'}}>
                    @{price.toFixed(2)}
                </Typography>
                <Typography sx={{fontSize: '0.9rem', fontWeight: 'medium', color: 'secondary.rose500'}}>
                    ${(price * quantity).toFixed(2)}
                </Typography>
            </Box>
        </Box>

        <IconButton onClick={removeFromCart}  size='small' disableFocusRipple sx={{ backgroundColor: 'white',color: 'primary.main', padding: 0,}}>
            <CancelIcon color='red' sx={{padding: '0'}}/>
        </IconButton>

    </Box>
  )
}

export default CartProductItem
