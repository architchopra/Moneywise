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
import { useState } from 'react';
  const Cong = (props) => {
    const [net, setNet] = useState(0);
    setNet(props.value1+props.value2);
    console.log(net);
    return (
      
          <Box>
            <Typography
              
              gutterBottom
              variant="h3"
            >
             
             {net}
            </Typography>
            </Box>
       
    );
  }
    
  
  export default Cong;
  