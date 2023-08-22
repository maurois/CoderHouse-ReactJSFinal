import { Grid } from '@mui/material';
import ProductCard from './ProductCard'
import { CategoryContext } from '../context/CategoryContext';
import { useContext } from 'react';

const ItemListContainer = ({ items }) => {

  const {isSelected} = useContext(CategoryContext)

  return (
    
    <Grid container spacing={2}>
      {items.map(i => {
        if (isSelected(i.category)){
          return (
            <Grid item key={i.docId} >
              {/* <ItemOverview item={i} /> */}
              <ProductCard item={i}/>
            </Grid>
          )
        }        
      })}
    </Grid>
  )

}

export default ItemListContainer;