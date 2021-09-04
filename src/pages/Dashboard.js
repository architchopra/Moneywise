import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@material-ui/core';
import Household from '../components/dashboard/Household';
import LatestOrders from '../components/dashboard/LatestOrders';
import LatestProducts from '../components/dashboard/LatestProducts';
import Sales from '../components/dashboard/Sales';
import Loan  from '../components/dashboard/loan';
import Shopping from '../components/dashboard/Shopping';
import Misc from '../components/dashboard/Misc';
import TrafficByExpense from '../components/dashboard/TrafficByExpense';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard | MoneyWise</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Household />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Shopping />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Loan/>
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Misc sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={7}
            md={12}
            xl={8}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={5}
            md={6}
            xl={4}
            xs={12}
          >
            <TrafficByExpense sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
