import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormGroup,
  FormControlLabel,
  Switch,
  Button
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu'
import CategoryIcon from '@mui/icons-material/Category';
import YardIcon from '@mui/icons-material/Yard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


import { useContext, useState } from 'react';
import CartButton from './CartButton';
import { useNavigate } from 'react-router-dom';

import { CategoryContext } from '../context/CategoryContext';

const NavBar = () => {

  const navigate = useNavigate()
  const [showDrawer, setShowDrawer] = useState(false)
  const { isSelected, toggleSelection, categoriesSelected} = useContext(CategoryContext)

  const handleSelection = (category) => {
    toggleSelection(category)
  }

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setShowDrawer(open)
  };

  return (
    <Box sx={{ position: 'static', flexGrow: 1, height: '100px' }}>
      <AppBar>
        <Toolbar>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1 }}>
              <Button variant='contained' disableElevation={true} size='small' onClick={() => navigate('/')}>
                <Typography variant="h6" >
                  Blue Store
                </Typography>
              </Button>
          </Box>
          <CartButton onClickFunction={() => { navigate('/cart')}} />

        </Toolbar>

        <SwipeableDrawer
          anchor='left'
          open={showDrawer}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => { navigate('/'); setShowDrawer(false) }}
                >
                  <ListItemIcon>
                    <YardIcon />
                  </ListItemIcon>
                  <ListItemText primary='Productos' />
                </ListItemButton>
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
                    <ListItemText primary='Categorias' sx={{ display: 'flex', flexFlow: '1', width: '100%' }} />
                  </AccordionSummary>
                  <AccordionDetails >
                    <FormGroup>
                      <FormControlLabel control={<Switch checked={isSelected('electronics')} onChange={() => {handleSelection('electronics')}}/>} label="Electronics" labelPlacement='start' sx={{ mr: 2 }} />
                      <FormControlLabel control={<Switch checked={isSelected('jewelery')} onChange={() => {handleSelection('jewelery')}}/>} label="Jewelery" labelPlacement='start' sx={{ mr: 2 }} />
                      <FormControlLabel control={<Switch checked={isSelected('men\'s clothing')} onChange={() => {handleSelection('men\'s clothing')}} />} label="Men's clothing" labelPlacement='start' sx={{ mr: 2 }} />
                      <FormControlLabel control={<Switch checked={isSelected('women\'s clothing')} onChange={() => {handleSelection('women\'s clothing')}}/>} label="Women's clothing" labelPlacement='start' sx={{ mr: 2 }} />
                    </FormGroup>
                  </AccordionDetails>
                </Accordion>
              </ListItem>

              <Divider />

              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => { navigate('/cart'); setShowDrawer(false) }}
                >
                  <ListItemIcon>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText primary='Cart' />
                </ListItemButton>
              </ListItem>

              <Divider />

            </List>
          </Box>
        </SwipeableDrawer>
      </AppBar>
    </Box>
  );
}

export default NavBar;