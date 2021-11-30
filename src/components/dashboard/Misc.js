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

const Misc = (props) => {

  return(
  <Card sx={{ bgcolor: '#ffcccb', color: '#000000' }}  {...props}>
    <CardContent sx={{ bgcolor: ' #ffcccb', color: '#000000' }}  >
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
            color="textPrimary"
            variant="h3"
          >
           {props.value}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: red[600],
              height: 56,
              width: 56
            }}
          >
            <AttachMoneyIcon />
          </Avatar>
      
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
          
          variant="caption"
        >
         Beware of little expenses. A small leak will sink a great ship.
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
      }
export default Misc;
