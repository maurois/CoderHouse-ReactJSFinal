import { Button, Card, CardActions, CardContent, CardMedia, Typography, Chip } from "@mui/material";
import PaidIcon from '@mui/icons-material/Paid';
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const CartItem = (item) => {

  const { removeItem } = useContext(CartContext)

  const handleClick = (id) => {
    removeItem(id)
  }

  return (
    <>
      <Card sx={{ display: 'flex', width: '100%', flexDirection: 'row' }} >
        <CardMedia
          sx={{ width: '70px', height: '70px', padding: '15px' }}
          component='img'
          image={item.item.image}
          alt={item.id}
        />
        <CardContent sx={{ display: 'flex', flexWrap:'nowrap', overflow:'hidden', direction: 'row', width: '100%', height: '70px', alignItems: 'center' }}>
          <Card variant="soft" sx={{ display: 'block', padding: '10px', width: '100%' }}>
            <Typography noWrap sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
              {item.item.title}
            <Chip  icon={<PaidIcon />} size="small" variant="outlained"  label={<Typography noWrap variant="body1"   >{item.item.price*item.item.quantity}</Typography>} />
            </Typography>
            <Typography noWrap variant="body1">$ {item.item.price}</Typography>
            <Typography noWrap>
              Cantidad: {item.item.quantity}
            </Typography>
          </Card>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
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