import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import {Typography,Box, ListItem, ListItemButton, ListItemText, IconButton} from '@mui/material'
import Container from '@mui/material/Container'
import CoffeeIcon from '@mui/icons-material/Coffee';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';



const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };


const Navbar = () => {
    const [drawerOpen,setDrawerOpen]=useState(false);
    const theme=useTheme();

    const isMobile=useMediaQuery(theme.breakpoints.down("md"));

    const toggleDrawer=(open)=>{
        setDrawerOpen(open)
    }

    const drawerLinks=[
        {text:"Home",link:"#home"},
        {text:"Coffee",link:"#coffee"}
    ]

  return (
    <div>
        <AppBar position="sticky" color="primary">
            <Container>
                <Toolbar>
                    <CoffeeIcon/>
                  <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: '"Eagle Lake", serif' }}>
  Coffee Shop
</Typography>

                    {isMobile && (<IconButton color="inherit" onClick={()=>toggleDrawer(true)}>
                        <MenuIcon/>
                    </IconButton>)}

                    {!isMobile && (<><Button color="inherit" href="#home">
                          Home
                      </Button><Button color="inherit" href="#cofee">
                              Coffee shop
                          </Button></>)}
                </Toolbar>
            </Container>
        
        </AppBar>

        <Drawer  anchor="right" open={drawerOpen} onClose={() => toggleDrawer(false)}
  >
            <Box sx={{width:200}} role="presentation" onClick={() => toggleDrawer(false)}
         >
                <List>
                    {drawerLinks.map((item,index)=>(
                        <ListItem key={index} disablePadding>
                            <ListItemButton  component="a" href={item.link}
                            onClick={() =>toggleDrawer(false)}
                            aria-label={`Navigate to ${item.text}`}>
                                <ListItemText primary={item.text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}

                </List>

            </Box>
          
        </Drawer>
        </div>
  )
}

export default Navbar
