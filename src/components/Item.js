import {
  Container, Grid, Button, Card, CardMedia,
  CardContent, CardActions, Typography,
  Box, CircularProgress, Snackbar, IconButton, FormGroup, FormControlLabel, ButtonGroup, TextField
} from '@mui/material';

import {Close, Remove, Add } from '@mui/icons-material';

import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import { getDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';

import { CartContext } from '../context/CartContext'

const Item = () => {

  const { id } = useParams()
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)
  const { addItem, removeItem } = useContext(CartContext)
  const [count, setCount] = useState(1)

  useEffect(() => {

    // console.log(cart);

    const itemRef = doc(db, 'products', id)

    getDoc(itemRef)
      .then((i) => {
        setItem(i.data())
        setLoading(false)
      })
      .catch(err => console.error(err))
  }, [])

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleUndo = (e, item) => {
    removeItem(item.id)
  }

  const action = (
    <>
      <Button
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
        <Close fontSize="small" />
      </IconButton>
    </>
  )

  const handleAddItem = (e, item, count) => {
    setOpen(true);
    addItem(item, count)
  }

  if (loading) {
    return (
      <Container sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
        <Box sx={{ m: 5 }}>
          <CircularProgress />
        </Box>
      </Container>
    )
  }

  return (
    <>
      <Card sx={{ display: 'flex', flexDirection: 'column', margin: '20px', padding: '20px' }}>
        <CardMedia
          component="img"
          sx={{ width: 300 }}
          image={item.image}
        />
        <Container sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography variant="h4" gutterBottom={true}>
              {item.title}
            </Typography>
            <Typography variant="h5" >
              $ {item.price}
            </Typography>
            <Typography variant="body1">
              {item.description}
            </Typography>
            <Grid container display='flex' flexDirection='row' alignItems='baseline'>
              <Grid item pr={2} >
                <Typography variant='h6'>
                  {item.category.toUpperCase()}
                </Typography>
              </Grid>
              <Grid item pr={2}>
                <Typography variant="h6" color="text.secondary">
                  Stock: {item.rating.count}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions >
            <Button size="small" onClick={(e) => { handleAddItem(e, item) }} >Agregar al carrito</Button>
            <ButtonGroup size='sm' >
              <Button onClick={() => {setCount(prev => prev - 1)}}>
                <Remove />
              </Button>
              <TextField size='small' sx={{ width:70 }} value={count} />
              <Button onClick={() => {setCount(prev => prev + 1)}}>
                <Add />
              </Button>
            </ButtonGroup>
          </CardActions>
        </Container>
      </Card>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Producto agregado al carrito de compras"
        action={action}
      />
    </>

  )
}

export default Item