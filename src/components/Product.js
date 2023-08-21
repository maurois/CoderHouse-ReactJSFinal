import {
  Snackbar, ButtonGroup, IconButton, Alert
} from '@mui/material';

import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';

import { Close, Remove, Add, Chip } from '@mui/icons-material';

import { useLocation } from "react-router-dom";

import { CartContext } from '../context/CartContext'
import { useContext, useState } from 'react';

const Product = () => {

  const [open, setOpen] = useState(false)
  const { addItem, removeItem, cart } = useContext(CartContext)
  const [count, setCount] = useState(1)

  const { state } = useLocation()
  const item = state


  const handleAddItem = (item, count) => {
    setOpen(true);
    addItem(item, count)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleUndo = (e, item) => {
    removeItem(item.id)
  }

  const snackbarAction = (
    <>
      <Button
        size='sm'
        onClick={(e) => { handleUndo(e, item) }}
      >
        DESHACER
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Close ml={2} fontSize="small" />
      </IconButton>
    </>
  )

  console.log(cart)

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          width: 320,
          // to make the card resizable
          overflow: 'auto',
          resize: 'horizontal',
          margin: '20px',
          padding: '20px'
        }}
      >
        <CardContent>
          <img src={item.image} alt={item.id} />

          <Typography variant="h4" level='title-lg' gutterBottom={true}>
            {item.title}
          </Typography>
          <Card variant='soft' sx={{ marginBottom: '10px' }} >
            <Typography level="body-sm">
              {item.category.toUpperCase()}
            </Typography>
            <Typography
              level="body-md"
              startDecorator='$'
            >
              <b>{item.price}</b>
            </Typography>
            <Typography level="body-sm">
              Stock: <b>{item.rating.count}</b> unidades
            </Typography>
          </Card>

          <Card variant='soft' >
            <CardContent>
              <Typography variant='body1'>
                Descripción
              </Typography>
              <Typography>
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        </CardContent>

        <CardActions >
          <Card
            variant='soft'
          >
            <Typography>Cantidad: {count} </Typography>
            <ButtonGroup size="sm" variant='outlined' aria-label="outlined button group" >
              <Button variant='outlined' sx={{ width: '10px' }} onClick={() => { setCount(prev => (prev - 1)) }}>
                <Remove />
              </Button>
              <Button variant='outlined' sx={{ width: '10px' }} onClick={() => { setCount(prev => (prev + 1)) }}>
                <Add />
              </Button>
            </ButtonGroup>
            <Button
              // sx={{height: '100px', width: '100px'}}
              variant="outlined"
              // color="success"
              onClick={() => handleAddItem(item, count)}
            >
              Agregar al carrito
            </Button>
          </Card>
        </CardActions>
      </Card>

      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Producto agregado al carrito de compras"
        action={snackbarAction}
      />
    </>
  )
}

export default Product;

