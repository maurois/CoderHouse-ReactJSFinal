import { Grid } from '@mui/material';
import ItemOverview from './ItemOverview';
import ItemCard from './ProductCard'

const ItemListContainer = ({ items }) => {

  return (
    <Grid container spacing={2}>
      {items.map(i => {
        return (
          <Grid item key={i.docId} >
            {/* <ItemOverview item={i} /> */}
            <ItemCard item={i}/>
          </Grid>
        )
      })}
    </Grid>
  )

}

export default ItemListContainer;