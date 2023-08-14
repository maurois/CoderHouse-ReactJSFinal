import { Container, Typography } from "@mui/material";
import CartItems from "../components/CartItems";

import { CartContext } from "../context/CartContext";
import { useContext } from "react";
const Cart = () => {

  return (
    <Container sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
      <CartItems />
    </Container>
  );
}

export default Cart;