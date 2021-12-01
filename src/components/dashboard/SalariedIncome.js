import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    LinearProgress,
    Typography
  } from '@material-ui/core';
  import { green } from '@material-ui/core/colors';
  import WorkIcon from '@material-ui/icons/Work';
  import "../../index.css";
  import { grey } from '@mui/material/colors';
  const SalariedIncome = (props) => (
    <Card
    className="inc"
      sx={{ height: '100%' }}
      sx={{ color: '#000000' }} 
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
              Fixed Incomes
            </Typography>
            <Typography
             
              variant="h3"
            >
            {props.value}
            </Typography>
          </Grid>
          <Grid item>
           
              <WorkIcon sx={{ color: grey[50] }} />
           
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
Early to bed and early to rise makes a man healthy, wealthy and wise
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
  
  export default SalariedIncome;
  