import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import ShoppingBagIcon from '@material-ui/icons/ShoppingBag';
import "../../index.css";
import { grey } from '@mui/material/colors';
const Shopping = (props) =>{
  return(
    <Card 
    className="exp"
    sx={{  color: '#000000' }}
     {...props}>
      <CardContent >
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
            
              gutterBottom
              
            >
              Shopping Expense
            </Typography>
            <Typography
              
              variant="h3"
            >
             {props.value}
            </Typography>
          </Grid>
          <Grid item>
           
              <ShoppingBagIcon sx={{ color: grey[50] }}/>
            
          </Grid>
        </Grid>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            pt: 2
          }}
        >
          {/* <ArrowUpwardIcon sx={{ color: green[900] }} />
          <Typography
            variant="body2"
            sx={{
              color: green[900],
              mr: 1
            }}
          >
            16%
          </Typography> */}
          <Typography
            
            variant="subtitle2"
          >
            Dont go broke trying to look rich             <br></br>
            <br></br>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
} 


export default Shopping;
