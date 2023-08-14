
// } from "@material-ui/core";

import React, { useState } from "react";

import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={() => setOpen(!open)}>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Button>
          <Typography variant="h6">My App</Typography>
        </Toolbar>
      </AppBar>
      {open && (
        <Menu open={open} onClose={() => setOpen(false)}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
        </Menu>
      )}
    </div>
  );
};
export default App;