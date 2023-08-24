import { List, ListItem, Button, ButtonGroup, Container, Typography, Box, Chip } from "@mui/material";
import PaidIcon from '@mui/icons-material/Paid';
import CartItem from "../components/CartItem";

import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Cart = () => {

  const { cart } = useContext(CartContext)
  let total = 0

  return (
    <Container>
      <List >
        {cart.map(item => {
          total += item.price * item.quantity
          console.log(total)
          return (
            <ListItem key={item.id}>
              <CartItem item={item} />
            </ListItem>
          )
        })}
      </List>
      <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <ButtonGroup sx={{display:'flex', flexDirection:'row'}}>
        <Button
          sx={{ margin:'15px' }}
          onClick={() => { console.log('falta manegara el click de compra'); }}
        >
          Comprar
        </Button>
      </ButtonGroup>
      <Box sx={{margin:'20px', display:'flex'}} >
      <Typography variant="h6" sx={{marginRight:'8px'}} >Total:</Typography>

      <Chip  icon={<PaidIcon />}   label={<Typography variant="h6"   >{total}</Typography>} />
      </Box>
      </Box>
      
      
    </Container>
  );
}

export default Cart;