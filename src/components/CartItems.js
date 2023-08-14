import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardActionArea, CardActions, CardContent, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";

import YardIcon from '@mui/icons-material/Yard';
import CategoryIcon from '@mui/icons-material/Category';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import {CartContext} from '../context/CartContext'
import { useContext } from "react";

const CartItems = () => {

  const {cart} = useContext(CartContext)

  console.log(cart);

  return ( 
    <List>
    <ListItem disablePadding>
        <Card >
          <CardContent>
            Hola
          </CardContent>
          <CardActionArea>
            <CardActions>
              <Button>
                Buenas
              </Button>
            </CardActions>
          </CardActionArea>
        </Card>

    </ListItem>

    <Divider />

    <ListItem disablePadding>
                <Accordion
                  elevation={0}
                >
                  <AccordionSummary
                    sx={{ width: '250px' }}
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <ListItemIcon>
                      <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText  sx={{ display: 'flex', flexFlow: '1', width: '100%' }} >
                      Hola
                    </ListItemText>
                  </AccordionSummary>
                  <AccordionDetails >
                    <Typography variant="body1">

                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </ListItem>

    </List>
   );
}
 
export default CartItems;