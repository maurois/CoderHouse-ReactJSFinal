import { Container, Typography, CircularProgress, Box } from "@mui/material";
import ProductListContainer from "../components/ProductListContainer";
import { useEffect, useState } from "react";


import { getDocs, collection } from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';

const Products = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const collectionRef = collection(db, 'products')
    getDocs(collectionRef)
      .then(res => {
        const prods = res.docs.map(doc => {
          const data = doc.data()
          return { docId: doc.id, ...data }
        })
        setProducts(prods)
        setLoading(false)
      })
      .catch(err => console.error(err))
  }, [])

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
      <Container sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
        <Box height={200} color='blue'>

        </Box>
        <ProductListContainer items={products} />
      </Container>
    </>
  );
}

export default Products;