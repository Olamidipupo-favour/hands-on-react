import {Outlet, Link } from 'react-router-dom';
import {useState} from 'react';
import {Toolbar,AppBar, Typography, IconButton,Box,Container,Drawer, Grid,Button, ListItem, ListItemIcon, ListItemText,List, GridItem, Avatar, ClickAwayListener} from '@mui/material';
//import {Button,Drawer} from 'antd';
import MenuIcon from '@mui/icons-material/Menu';
export default function Layout(){
  const drawerWidth=200;
  const typoStyle={
    flexGrow:9
  };
  const [open, setOpen] = useState(false);

  const clicked = () => {
    setOpen(!(open));
  };
  return (
    <>
    <AppBar sx={{ 
		        zIndex: (theme) => theme.zIndex.drawer + 1 , flexGrow:300}}>
    <Toolbar>
    <IconButton onClick={clicked}>
    <MenuIcon/>
    </IconButton>
    <Typography variant="h4" sx={typoStyle}>MUI TUTS</Typography>
    <Avatar sx={{ bgcolor: 'magenta' }}>JB</Avatar>
    </Toolbar>
    </AppBar>
    <Drawer
                    open={open}
                    PaperProps={{ 
		        elevation: 12, 
			sx: { bgcolor: 'primary.light', width: drawerWidth, textAlign: 'center', borderRight: 0 } }} onClose={clicked} variant="temporary"
  ModalProps={{
    keepMounted: true,
  }}>
                    <Toolbar />
                    <nav >
                        <List>
                            <ListItem button>
                                <Link to="/dashboard/test">
                                    <ListItemText primary="Test" />
                                </Link>
                            </ListItem>
<ListItem button>
<Link to="/dashboard/"><ListItemText primary="Index"/></Link>
</ListItem>
                        </List>
                    </nav>
                </Drawer>
    <Outlet/>
</>
) 
} ;