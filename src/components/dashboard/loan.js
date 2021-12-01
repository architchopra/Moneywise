import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
import "../../index.css";
import { grey } from '@mui/material/colors';
const Loan = (props) => (
  <Card
  className="exp"
    sx={{ height: '100%' }}
    sx={{  color: '#000000' }} 
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
            Investment and Loan
          </Typography>
          <Typography
            
            variant="h3"
          >
          {props.value}
          </Typography>
        </Grid>
        <Grid item>
        
            <InsertChartIcon sx={{ color: grey[50] }} />
          
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
          Its not about how much money you make, Its how to save it!
        </Typography>
      </Box>
      {/* <Box sx={{ pt: 3 }}>
        <LinearProgress
          value={75.5}
          variant="determinate"
        />
      </Box> */}
    </CardContent>
  </Card>
);

export default Loan;
