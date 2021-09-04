import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Logo from './Logo';
import "../index.css"

const MainNavbar = (props) => (
  <AppBar
    elevation={0}
    {...props}
  >
    <Toolbar sx={{ height: 64 }}>
    <RouterLink to="/">
         
         <Logo />
       
        
       </RouterLink>
       <RouterLink to="/">
       <div className="col">
         <Typography variant="h4" style={{marginLeft: "20%"}}>Moneywise</Typography>
         </div>
         </RouterLink>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
