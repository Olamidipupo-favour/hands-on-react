import {Button,Box,Typography,Grid, AppBar,Toolbar,ThemeProvider,Select,MenuItem,Menu,IconButton, Drawer,List,ListItem,ListItemText,ListItemButton,Collapse,ListSubheader, ListItemIcon} from '@mui/material';
//import {KeyboardArrowDownIcon,ArrowForwardIcon,GoogleIcon} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useMediaQuery from '@mui/material/useMediaQuery';
import {createTheme} from '@mui/material/styles';
import react, {useState} from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.svg';
import './nf.css';
import bg from './bg.gif';
import ft from './rbg.png';
const cacct= createTheme({
  status:{
    danger: '#e53e3e'
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
}});
const Pc=()=>{
  //return my home screen jsx
const vid={
width: {
      sx: 1.0, // 100%
      sm: 250,
      md: 350
}
};
const login=()=>{
  return (<Link to='/login' />);
};
 const register=()=>{
   return (<Link to='/login' />);
 };
 const [open,setOpen]=useState();
 const close=()=>{
 return  setOpen(false);
 };
return (
  <div className="main">
 <AppBar elevation={0}>
<Toolbar style={{"backgroundColor":'#ffffff'}}>
<img src="https://cdn.iconscout.com/icon/premium/png-128-thumb/quilt-blanket-6277794-5222645.png" style={{"width":"20px", "width":"20px"}}/>
<Typography variant='h6' sx={{'color':'#000','flexGrow':4}}>Quilr</Typography>
<Button variant='text' onClick={()=>{setOpen(true)}} sx={{'color':'#000', 'flexGrow':4}} endIcon={<KeyboardArrowDownIcon />}>PRODUCT</Button>
<Menu open={open}>
 <MenuItem onClick={close} value="Mintranet">Mintranet</MenuItem>
    <MenuItem  onClick={close} value="Carde">Carde</MenuItem>
    <MenuItem onClick={close} value="Liteweb">Liteweb</MenuItem>
    </Menu>
<Typography variant='h7' sx={{'color':'#000','flexGrow':4}}>TEMPLATES</Typography>
<Typography variant='h7' sx={{'color':'#000','flexGrow':4}}>PRICING</Typography>
<Typography variant='h7' sx={{'color':'#000', 'flexGrow':4}}>CUSTOMERS</Typography>
<Typography variant='h7' sx={{'color':'#000', 'flexGrow':4}}>BOOK A DEMO</Typography>
<Button variant='outlined' color='success'  sx={{'marginRight':'4px'}}>LOGIN</Button>
<Button variant='contained' color='success' endIcon={<ArrowForwardIcon/>}>TRY IT FREE</Button>
</Toolbar>
 </AppBar>
  </div>
  );
};
const Mobile=()=>{
  const [open,setOpen]=useState();
  const [menu,setMenu]=useState();
  const toggle=()=>{
    setMenu(!menu);
  }
  return(
    <div className="main">
    <AppBar style={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
    <Toolbar style={{"backgroundColor":'#ffffff'}}>
    <IconButton onClick={()=>{setOpen(!open)}}>
    <MenuIcon/>
    </IconButton>
<img src="https://cdn.iconscout.com/icon/premium/png-128-thumb/quilt-blanket-6277794-5222645.png" style={{"width":"20px", "width":"20px"}}/>
<Typography variant='h6' sx={{'color':'#000','flexGrow':4}}>Quilr</Typography> <Button variant='outlined' color='success'  sx={{'marginRight':'4px'}}>LOGIN</Button>
<Button variant='contained' color='success' endIcon={<ArrowForwardIcon/>}>TRY IT FREE</Button>
    </Toolbar>
    </AppBar>
    <Drawer open={open} onClose={()=>{setOpen(!open)}} 
    PaperProps={{ 
		        elevation: 12, 
			sx: { bgcolor: '#ffffff', width: 200, textAlign: 'center', borderRight: 0 }}}>
    <nav >
    <List>
    <ListItemButton onClick={toggle}>
    <ListItemText primary="PRODUCT"/>
        {menu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
<Collapse in={menu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton onClick={()=>{setOpen(false)}}>
          <ListItemText primary="Mintranet"/>
          </ListItemButton>
           <ListItemButton onClick={()=>{setOpen(false)}}>
          <ListItemText primary="Carde"/>
          </ListItemButton>
          
        </List>
        <ListItemButton onClick={()=>{setOpen(false)}}>
          <ListItemText primary="Liteweb"/>
          </ListItemButton>
      </Collapse>
      <ListItemButton>
      <ListItemText primary="TEMPLATES"/>
      </ListItemButton>
       <ListItemButton>
      <ListItemText primary="PRICING"/>
      </ListItemButton>
 <ListItemButton>
      <ListItemText primary="CUSTOMERS"/>
      </ListItemButton>
 <ListItemButton>
      <ListItemText primary="BOOK A DEMO"/>
      </ListItemButton>
                        </List>
                    </nav>
    </Drawer>
    </div>);
};
const Home=()=>{
const matches = useMediaQuery('(min-width:600px)');
return matches?(<Pc/>):(<Mobile/>);
};
export default Home;