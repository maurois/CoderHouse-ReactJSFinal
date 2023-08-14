import { Grid, color } from '@mui/material';
import ItemOverview from './ItemOverview';

const ItemListContainer = ({ items }) => {

  return (
    <Grid container spacing={4}>
      {items.map(i => {
        return (
          <Grid key={i.docId} item>
            <ItemOverview item={i} />
          </Grid>
        )
      })}
    </Grid>
  )

}

export default ItemListContainer;