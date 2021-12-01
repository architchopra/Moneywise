import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import  HouseIcon from '@material-ui/icons/House';
import { red } from '@material-ui/core/colors';
import "../../index.css";
import { grey } from '@mui/material/colors';
const Household = (props) => {
  console.log(props)
  return (
    <Card
    className="exp"
    sx={{ height: '100%',
     color: '#000000'  
   }}
    {...props}
  >
    
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            
            gutterBottom
            variant="h6"
          >
            Household Expense
          </Typography>
          <Typography
            
            variant="h3"
          >
           {props.value}
          </Typography>
        </Grid>
        <Grid item>
          
            <HouseIcon sx={{ color: grey[50] }} />
        
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* <ArrowDownwardIcon sx={{ color: red[900] }} />
        <Typography
          sx={{
            color: red[900],
            mr: 1
          }}
          variant="body2"
        >
          12%
        </Typography> */}
        <Typography
         
          variant="subtitle2"
        >
          Moneywise Be Wise
        </Typography>
      </Box>
    </CardContent>
  </Card>
  );
}
  

export default Household;
