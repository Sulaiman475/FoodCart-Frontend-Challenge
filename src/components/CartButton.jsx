import { Button } from '@mui/material'
import React from 'react'

const CartButton = ({children, onClick}) => {
  return (
    <Button onClick={onClick} sx={{backgroundColor: 'primary.main', borderRadius: '50rem', color: 'secondary.main',
        padding: '0.8rem 1.5rem', marginTop: '1rem', width: '100%', textTransform: 'none', fontSize: '1rem'}}>
            {children}
    </Button>
  )
}

export default CartButton
