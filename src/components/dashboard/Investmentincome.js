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
  import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';
  
  const Investmentincome = (props) => (
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
              Investment Incomes
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
              <InsertChartIcon />
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
            Genius is one percent inspiration and ninety-nine percent perspiration
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
  
  export default Investmentincome;
  