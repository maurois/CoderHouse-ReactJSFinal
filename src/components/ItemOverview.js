import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ItemOverview = ({ item }) => {

  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/products/${id}`)
  }

  return (
    <Card key={item.id} elevation={5} title={item.title} sx={{ width: '350px', height: '445px', margin: "5px" }}>
      <CardMedia
        sx={{ height: '300px' }}
        image={item.image}
        onClick={() => { handleClick(item.docId) }}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom component="div" noWrap={true}>
          {item.title}
        </Typography>
        <Typography variant="body1">
          {item.category.toUpperCase()}
        </Typography>
      </CardContent>
      <Divider flexItem />
      <CardActions>
        <Button size='small' onClick={() => { handleClick(item.docId) }} >Detalles</Button>
        <Button size="small">Agregar al carrito</Button>
      </CardActions>
    </Card>
  );
}

export default ItemOverview