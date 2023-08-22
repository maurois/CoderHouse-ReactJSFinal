import { List, ListItem, Button, ButtonGroup, Container } from "@mui/material";
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
            <ListItem key={item.id}>
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