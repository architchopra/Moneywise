import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Container,
  Hidden,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Logo from './Logo';
import "../index.css"
import { grey } from '@mui/material/colors';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  const [notifications] = useState([]);
  if(localStorage.getItem("user")!=null){
   const name=JSON.parse(localStorage.getItem("user")).firstname;
  
  
  return (
    <Container class="centered">
    <AppBar
      elevation={0}
      {...rest}
      sx={{ 
        backgroundColor:"#FFFFFF"
      }}
    >
      <Toolbar>
          <IconButton  onClick={onMobileNavOpen} size="large">
            <MenuIcon sx={{ color: grey[900] }} />
          </IconButton>
        
        
        <Box sx={{ flexGrow: 1 }} />
      
        
        <div className="nav">
          <RouterLink to="/">
           
            <Logo />
          
           
          </RouterLink>
          <RouterLink to="/">
          <div className="col">
            <Typography variant="h1" style={{marginRight: "20%",marginTop: "5%", color: "#00008b"}}>Moneywise</Typography>
            </div>
            </RouterLink>
            </div>
            <div style={{color:"#00008b"}}>
          
             <h3>Hi {name}</h3>
           
            </div>
      </Toolbar>
    </AppBar>
    </Container>
  );
  }
  else{
    return (
      <Container class="centered">
      <AppBar
        elevation={0}
        {...rest}
      >
        <Toolbar>
        <Hidden xlUp>
            <IconButton color="inherit" onClick={onMobileNavOpen} size="large">
              <MenuIcon />
            </IconButton>
          </Hidden>
          
          
          <Box sx={{ flexGrow: 1 }} />
          <Hidden xlDown>
            <IconButton color="inherit" size="large">
              <Badge
                badgeContent={notifications.length}
                color="primary"
                variant="dot"
              >
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit" size="large">
              <InputIcon />
            </IconButton>
          </Hidden>
        
          
          <div className="nav">
            <RouterLink to="/">
             
              <Logo />
            
             
            </RouterLink>
            <RouterLink to="/">
            <div className="col">
              <Typography variant="h1" style={{marginRight: "20%",marginTop: "5%"}}>Moneywise</Typography>
              </div>
              </RouterLink>
              </div>
              <div>
            
               <h3>Hi </h3>
             
              </div>
        </Toolbar>
      </AppBar>
      </Container>
    );
  }
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
