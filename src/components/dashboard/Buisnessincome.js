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
  import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
  
  const Buisnessincome = (props) => (
    <Card
      sx={{ height: '100%' }}
      sx={{ bgcolor: ' 	#adff7a', color: '#000000' }} 
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
              Buisness Incomes
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
             20000
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: green[600],
                height: 50,
                width: 50
              }}
            >
              <BusinessCenterIcon />
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
           
            variant="subtitle2"
          >
           Laziness may appear attractive, but work gives satisfaction
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
  
  export default Buisnessincome;
  