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

const TrafficByExpense = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [60.7, 10.3, 24.7,4.3],
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
    labels: ['Shopping', 'household', 'Loan']
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
      title: 'Shopping ',
      value: 6.61,
      icon: LaptopMacIcon,
      color: colors.indigo[500]
    },
    {
      title: 'Household',
      value: 0.41,
      icon: TabletIcon,
      color: colors.red[600]
    },
    {
      title: 'Loan',
      value: 82.6,
      icon: PhoneIcon,
      color: colors.orange[600]
    },
    {
      title: 'Miscellanious',
      value:10.3,
      icon: TabletIcon,
      color: colors.red[600]
    }
  ];

  return (
    <Card {...props} >
      <CardHeader title="Expense Ratio" />
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
                height: 20,
                width: 60,
              }}
            >
              <Icon color="action" />
              <Typography
                color="textPrimary"
                variant="body1"
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
