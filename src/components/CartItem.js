import { Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Padding } from "@mui/icons-material";

const CartItem = (item) => {

  const { cart, removeItem } = useContext(CartContext)

  const handleClick = (id) => {
    removeItem(id)
  }

  return (
    <>
      <Card sx={{ display: 'flex' }} >
        <CardContent sx={{ display: 'flex', direction: 'row', width: '500px', height: '70px', alignItems: 'center' }}>
          <CardMedia
            sx={{ width: '70px', height: '70px' }}
            component='img'
            image={item.item.image}
            alt={item.id}
          />
          <Card variant="soft" sx={{ display: 'block', padding: '10px' }}>
            <Typography >
              {item.item.title}
            </Typography>
            <Typography>
              Cantidad: {item.item.quantity}
            </Typography>
          </Card>
        </CardContent>
        <CardActions>
          <Button
            sx={{ width: '80px', height: '80px' }}
            onClick={() => { handleClick(item.item.id) }}
          >
            Quitar del carrito
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default CartItem