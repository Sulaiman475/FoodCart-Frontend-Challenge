import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Fade } from '@mui/material';
import { useCart } from '../Contexts/CartContext';
import CartButton from './CartButton';

const style = {
  position: 'absolute',
  top: {sm: '50%'},
  left: {sm: '50%'},
  transform: {sm: 'translate(-50%, -50%)'},
  bottom: {xs: '0', sm: 'auto'},
  width: {
    xs: "100%",
    sm: "500px",
    md: "600px",
    lg: "700px",
  },
  maxHeight: '90vh',
  bgcolor: 'white',
  borderRadius: {xs: '1rem 1rem 0 0',sm: '0.7rem'},
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: '2.5rem',
  justifyContent: 'space-between',
  overflowY: 'auto'

};

function ModalWindow() {
  const { cart, startNewOrder } = useCart();
  const totalCartPrice = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    startNewOrder();
    setOpen(false);
  };

  return (
    <div>
      <CartButton onClick={handleOpen}>Confirm Order</CartButton>
      <Modal
        // disableEnforceFocus
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        // disableAutoFocus
        // disableEnforceFocus
        // disableScrollLock={true}
      >
        <Fade in={open}>
          <Box sx={style} className ='scrollable-box'>
            <Box>
              <Typography id="modal-modal-title" variant="h3" component="h2" sx={{fontSize: '2.5rem', fontWeight: 'bold'}}>
                Order Confirmed
              </Typography>
              <Typography id="modal-modal-description" sx={{fontSize: '1rem', color: 'secondary.rose400', 
                mt: '0.5rem' }}
              >
                  We hope you enjoy your food!
              </Typography>
            </Box>

            <Box sx={{padding: '1rem', backgroundColor: 'hsl(20 50% 98%)'}}>
                {
                  cart.map((item) => (
                    <Box key={item.name} sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                      <Box sx={{display: 'flex', gap: '1rem', padding: '0.5rem 0 1.2rem', borderBottom: '1px solid hsl(13, 31%, 94%)'}}>
                        <img src={item.image.thumbnail} style={{borderRadius: '5px'}} width={'50px'} height={'50px'} alt={item.name}/>
                        <Box>
                          <Typography sx={{fontSize: '0.8rem'}}>{item.name}</Typography>
                          <Box sx={{display: 'flex', gap: '1rem'}}>
                            <Typography sx={{fontSize: '0.8rem', color: 'primary.main'}}>{item.quantity}x</Typography>
                            <Typography sx={{fontSize: '0.8rem', color: 'secondary.rose400'}}>@${item.price.toFixed(2)}</Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Typography sx={{fontWeight: 'medium'}}>${(item.price * item.quantity).toFixed(2)}</Typography>
                    </Box>
                  ))
                }
                <Box sx={{display: 'flex', gap: '1rem', justifyContent: 'space-between', alignItems: 'center',
                  padding: '1rem 0 0'}}>
                  <Typography>Order Total</Typography>
                  <Typography sx={{fontWeight: 'bold', fontSize: '1.5rem'}}>${totalCartPrice.toFixed(2)}</Typography>
                </Box>
            </Box>

            <CartButton onClick={handleClose}>Start New Order</CartButton>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}


export default  ModalWindow;