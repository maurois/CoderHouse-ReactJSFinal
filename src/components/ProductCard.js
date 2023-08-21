import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ItemCard = ({item}) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/products/${item.id}`, {state: item})
  }

  return (
    <Card variant='outlined' sx={{ width: 320, maxWidth: '100%', boxShadow: 'lg' }}>
      <CardActionArea sx={{ margin: '0' }} onClick={ handleClick}>
      {/* <Button size='small' onClick={() => { handleClick(item.docId) }} >Detalles</Button> */}
        <CardOverflow>
          <AspectRatio sx={{ minWidth: 200 }}>
            <img
              src={item.image}
              alt={item.id}
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography
            maxLength={10}
            title={item.title}
            level="title-lg"
            gutterBottom
            sx={
              {
                height: '26px',
                maxWidth: '300px',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }
            }>
            {item.title}
          </Typography>
          <Typography level="body-xs" >
            <Chip component="span" size="sm" variant="soft" color="neutral">
              {item.category}
            </Chip>
          </Typography>
          <Typography
            
            // sx={{ mt: 1, fontWeight: 'xl' }}
            startDecorator='$'
          >
            <b>{item.price}</b>
          </Typography>

          <Typography level="body-sm">
            Stock: <b>{item.rating.count}</b> unidades
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card >
  );
}

export default ItemCard
