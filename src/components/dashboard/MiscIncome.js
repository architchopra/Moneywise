import {
    Avatar,
    Card,
    CardContent,
    Grid,
    Typography
  } from '@material-ui/core';
  import { green } from '@material-ui/core/colors';
  import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
  import { Box } from '@material-ui/system';
  
  const MiscIncome = (props) => (
    <Card
    sx={{height: '100%', bgcolor: '#adff7a', color: '#000000' }}
    {...props}>
      <CardContent  sx={{ bgcolor: '#adff7a', color: '#000000' }} >
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
             Miscellaneous Income
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
                backgroundColor: green[600],
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
            
            variant="subtitle2"
          >
           An honest man's the noblest work of God
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
  
  export default MiscIncome;
  