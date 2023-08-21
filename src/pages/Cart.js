import { List, ListItem, Typography, Button, ButtonGroup, Container } from "@mui/material";
import CartItem from "../components/CartItem";

import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Cart = () => {

  const { cart } = useContext(CartContext)

  return (
    <Container>
      <List >
        {cart.map(item => {
          return (
            <ListItem>
              <CartItem item={item} />
            </ListItem>
          )
        })}
      </List>
      <ButtonGroup sx={{display:'flex', flexDirection:'row'}}>
        <Button
          sx={{ margin:'15px' }}
          onClick={() => { console.log('falta manegara el click de compra'); }}
        >
          Comprar
        </Button>
      </ButtonGroup>
    </Container>
  );
}

export default Cart;