// import './App.css';
import Products from './components/Products';
import {Container} from '@mui/material';
import Cart from './components/Cart';
import CartProvider from './Contexts/CartContext';

function App() {
  return (
    <>
      <CartProvider>
        <Container sx={{ padding: "2rem", margin: {xs: '0 0 0 0rem', sm: '0 2rem 0 1.3rem'}, maxWidth: {lg: '100vw'}, 
          height: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexDirection: {xs: 'column', md: 'row'}}}>
            <Products />
            <Cart />
        </Container>
      </CartProvider>
    </>
  );
}
export default App;
