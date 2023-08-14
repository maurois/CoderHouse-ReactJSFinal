import { Badge, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartButton = () => {
  return (

    <IconButton>
      <Badge badgeContent={4} color="secondary">
        <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
      </Badge>
    </IconButton>

  )
}

export default CartButton;