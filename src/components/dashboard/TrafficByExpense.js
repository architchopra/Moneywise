import { Doughnut } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  useTheme
} from '@material-ui/core';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneIcon from '@material-ui/icons/Phone';
import TabletIcon from '@material-ui/icons/Tablet';
import { object } from 'prop-types';

const TrafficByExpense = (props) => {
  const name=props.val2+ " "+"Ratio";
 
  const keys=Object.keys(props.val);
  const values=Object.values(props.val);
  let sum=values.reduce((a, b) => a + b, 0);
  const theme=useTheme();
  const data = {
    datasets: [
      {
        data: Object.values(props.val),
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
          colors.orange[800],
          colors.yellow[100]
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: Object.keys(props.val)
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const devices = [
    {
      title: keys[0],
      value: (props.val[keys[0]]*100/sum).toFixed(2),
      icon: LaptopMacIcon,
      color: colors.indigo[500]
    },
    {
      title: keys[1],
      value: (props.val[keys[1]]*100/sum).toFixed(2),
      icon: TabletIcon,
      color: colors.red[600]
    },
    {
      title: keys[2],
      value: (props.val[keys[2]]*100/sum).toFixed(2),
      icon: PhoneIcon,
      color: colors.orange[600]
    },
    {
      title: keys[3],
      value: (props.val[keys[3]]*100/sum).toFixed(2),
      icon: TabletIcon,
      color: colors.red[600]
    }
  ];
  return (
    <Card  >
      <CardHeader title={name} />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {devices.map(({
            color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center',
               
              }}
            >
              <Icon color="action" />
              <Typography
                color="textPrimary"
                variant="subtitle1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h4"
              >
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TrafficByExpense;
