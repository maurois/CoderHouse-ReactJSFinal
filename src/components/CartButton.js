import { Badge, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const CartButton = ({ onClickFunction }) => {

  const { cart } = useContext(CartContext)

  return (
    <IconButton onClick={onClickFunction}>
      <Badge badgeContent={cart.length} color="secondary">
        <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
      </Badge>
    </IconButton>
  )
}

export default CartButton;