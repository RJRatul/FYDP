import React from 'react';
import { AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Appbar = ({setPage}) => {

  return <div>
      <AppBar>
      <Toolbar>
        <Button color="inherit">Home</Button>
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={()=> setPage(false)}>
            Blog
          </Button>
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={()=> setPage(true)}>
            FAQ
          </Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
  </div>;
};
export default Appbar;