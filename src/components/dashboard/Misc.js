import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { Box } from '@material-ui/system';
import "../../index.css";
import { grey } from '@mui/material/colors';
const Misc = (props) => {

  return(
  <Card 
  className="exp"
  sx={{ color: '#000000' }} 
   {...props}>
    <CardContent sx={{  color: '#000000' }}  >
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
           Miscellaneous Expenditure
          </Typography>
          <Typography
           
            variant="h3"
          >
           {props.value}
          </Typography>
        </Grid>
        <Grid item>
          
            <AttachMoneyIcon sx={{ color: grey[50] }} />
         
      
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
         Beware of little expenses. A small leak will sink a great ship.
        </Typography>
      </Box>
      <br></br>
    </CardContent>
  </Card>
);
      }
export default Misc;
