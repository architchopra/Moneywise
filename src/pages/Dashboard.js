import { Helmet } from 'react-helmet';
import { Box, Container, Grid,  CssBaseline } from '@material-ui/core';
import { makeStyles} from '@material-ui/styles';
import Household from '../components/dashboard/Household';
import LatestOrders from '../components/dashboard/LatestOrders';
import LatestProducts from '../components/dashboard/LatestProducts';
import Sales from '../components/dashboard/Sales';
import Loan  from '../components/dashboard/loan';
import Shopping from '../components/dashboard/Shopping';
import Misc from '../components/dashboard/Misc';
import MiscIncome from 'src/components/dashboard/MiscIncome';
import TrafficByExpense from '../components/dashboard/TrafficByExpense';
import Investmentincome from 'src/components/dashboard/Investmentincome';
import api from "../api";
import { useEffect , useState } from 'react';
import Buisnessincome from 'src/components/dashboard/Buisnessincome';
import SalariedIncome from 'src/components/dashboard/SalariedIncome';
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router';
// import { CssBaseline } from '@mui/material';
const useStyles = makeStyles(() => ({
 boxed: {
    backgroundColor: "#808080",
  },
  heading: {
    fontSize: '2rem',
    justifyContent: 'left',
    alignItems: 'left'
  },
 
 
}));
const Dashboard = () => {
  
  let navigate = useNavigate();
  const [expense, setExpense] = useState([]);
  async function FetchData() {
    const config ={
      headers:{
        'Content-Type': 'application/json',
        'token': JSON.parse(localStorage.getItem("user")).token,
      }
    }
    const {data} = await api.post('/api/private/expenses',{}, config).catch((error) => {
      console.log(error);
    });
    setExpense(data.expenses);
    console.log(data.expenses);
    var dt= new Date();
    dt.setHours(0, 0, 0, 0);
    dt.setDate(1);
    console.log(dt);
    var expense=[],expensedate=[];
    let i=0;
      while(i<data.expenses.length){
        var curdt=new Date(data.expenses[i].date);
        let sum=0;
        console.log(dt,i);
        while(curdt>=dt&&i<data.expenses.length){   
          curdt=new Date(data.expenses[i].date);if(curdt<dt){
            break;
          } 
          sum+=data.expenses[i].cost;
          console.log(curdt,dt,i);
          i++;
        }
        expense.push(sum);
        expensedate.push(dt.toLocaleString('default', { month: 'short',year :'2-digit' }));
        console.log(sum,dt.getMonth());
        dt.setMonth(dt.getMonth()-1);
        dt.setDate(1);
      }
    console.log(expensedate);
    console.log(expense);
    //console.log(JSON.parse(localStorage.getItem("user")).token);
    // const {data} = await api.post('/api/private/mails',{},config).catch((error)=>{console.log(error)});
    // console.log(data);
    // console.log(data.type);
    // formData.append("type", expense);
    // formData.append('cost', cost);

   // const state = { EMAIL:emailValue,MESSAGE:feedbackValue}
    // console.log(formData);
    //  const dispatch = useDispatch();
    // dispatch(postUserData());

  //   const { data } = await axios.post(
  //     'https://zxtsbd2v6e.execute-api.us-east-1.amazonaws.com/prod/support',
  //     formData
  //  )
   // setFetchedData(data)
  }
  const classes = useStyles();
  useEffect(() => {
    if(localStorage.getItem("user")===null){
      console.log("logout");
      navigate('/login')
    }
   
    // Update the document title using the browser API
  else{
   FetchData();
  }
  },[]);
  return (
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
       <CssBaseline />
      <Container maxWidth="xl">
      <Box className={classes.boxed}>
      <h3 className="formheading2">Types of Expenditures</h3>
        <Grid
          container
          spacing={3}
          sx={{
            paddingLeft:"0.6rem",
            paddingRight:"0.6rem"
          }} 
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
            <Misc sx={{ bgcolor: '#ffcccb', color: '#000000',height: '100%' }} />
          </Grid>
          </Grid>
          <br></br>
          </Box>
          <br></br><br></br>
          <Box className={classes.boxed}>
          <h3 className="formheading2">Types of Incomes</h3>
          <Grid
          container
          spacing={3}
          sx={{
            paddingLeft:"0.6rem",
            paddingRight:"0.6rem"
          }} 
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <SalariedIncome />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
             <Buisnessincome/>
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Investmentincome/>
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <MiscIncome  sx={{ bgcolor: '#adff7a', color: '#000000',height: '100%' }}/>
          </Grid>
          </Grid>
          <br></br>
          </Box>
          <br></br><br></br>
         
          <Grid
          container
          spacing={3}
          
        >
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
}
 

export default Dashboard;
