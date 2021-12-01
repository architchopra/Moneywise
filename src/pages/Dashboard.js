import { Helmet } from 'react-helmet';
import { Box, Container, Grid, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Household from '../components/dashboard/Household';
import LatestOrders from '../components/dashboard/LatestOrders';
import LatestProducts from '../components/dashboard/LatestProducts';
import Sales from '../components/dashboard/Sales';
import Loan from '../components/dashboard/loan';
import Shopping from '../components/dashboard/Shopping';
import Misc from '../components/dashboard/Misc';
import MiscIncome from 'src/components/dashboard/MiscIncome';
import TrafficByExpense from '../components/dashboard/TrafficByExpense';
import Investmentincome from 'src/components/dashboard/Investmentincome';
import api from '../api';
import { useEffect, useState } from 'react';
import Buisnessincome from 'src/components/dashboard/Buisnessincome';
import SalariedIncome from 'src/components/dashboard/SalariedIncome';
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router';
import { Abc } from '@mui/icons-material';
// import { CssBaseline } from '@mui/material';
const useStyles = makeStyles(() => ({
  boxed: {
    backgroundColor: '#808080'
  },
  heading: {
    fontSize: '2rem',
    justifyContent: 'left',
    alignItems: 'left'
  }
}));
const Dashboard = () => {
  // let sum=0,sum2=0,sum3=0;
  const [houses, setHouses] = useState([]);
  const [shopping, setShopping] = useState([]);
  const [inv, setInv] = useState([]);
  const [misc, setMisc] = useState([]);
  let navigate = useNavigate();
  const [expense, setExpense] = useState([]);
  const [graphdata,setGraphdata]=useState({});
  // const [object, setObject] = useState({
  //   admin:{
  //   household: '',
  //   shopping: '',
  //   misc: '',
  //   investment: ''
  //   }
  // });
  const object = {
    household: '',
    shopping: '',
    misc: '',
    investment: ''
  };
  async function FetchData() {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        token: JSON.parse(localStorage.getItem('user')).token
      }
    };
    const { data } = await api
      .post('/api/private/expenses', {}, config)
      .catch((error) => {
        console.log(error);
      });
    setExpense(data.expenses);
    //console.log(data.expenses);
    const earningdata  = await api
      .post('/api/private/earnings', {}, config)
      .catch((error) => {
        console.log(error);
    });
    console.log(earningdata);
    let earnings=earningdata.data.earning;
    console.log(earnings);
    //   for(var i=0;i<data.expenses.length;i++){
    //    if(data.expenses[i].type=="household"){
    //      houses=houses+data.expenses[i].cost;
    //  }
    //  };
    const a = [];

    var typeNames = new Set();
    data.expenses.filter((x) => {
      typeNames.add(x.type);
    });
    typeNames.forEach((element) => {
      data.expenses.forEach((x) => {
        if (x.type == element) {
          a.push(x.cost);
        }
      });
      const sum = a.reduce(function (y, b) {
        return y + b;
      });
      //console.log(a, sum);
      object[element] = sum;
      a.length = 0;
      //console.log(object);
      // setObject({
      //   ...object, admin: { ...object.admin, [element]: sum }

      // })

    //   setObject(prevState => ({
    //     ...prevState,
    //     [element]: sum
    // }));
      
    });
    
    setHouses(object.household);
    setShopping(object.shopping);
    setInv(object.investment);
    setMisc(object.misc);
    
    // let sum=0;
    //    if(x.type=="household"){
    //   sum=sum+x.cost;
    //   setHouses(sum);
    //    }
// let jn=3;
    //    else if(x.type=="shopping"){
    //     sum2=sum2+x.cost;
    //     setShopping(sum2);
    //      }
    //      else if(x.type=="shopping"){
    //       sum2=sum2+x.cost;
    //       setShopping(sum2);
    //        }

    var dt= new Date();
    dt.setHours(0, 0, 0, 0);
    dt.setDate(1);
    //console.log(dt);
    var expenseval=[],expensedate=[],earningval=[];
    let i=0,j=0;
      while(i<data.expenses.length){
        var curdt=new Date(data.expenses[i].date);
        let sum=0,sumearning=0;
        //console.log(dt,i);
        while(curdt>=dt&&i<data.expenses.length){   
          curdt=new Date(data.expenses[i].date);
          if(curdt<dt){
            break;
          } 
          sum+=data.expenses[i].cost;
          //console.log(curdt,dt,i);
          i++;
        }
        curdt=new Date(earnings[j].date);
        while(curdt>=dt&&j<earnings.length){   
          curdt=new Date(earnings[j].date);
          if(curdt<dt){
            break;
          } 
          sumearning+=earnings[j].cost;
          //console.log(curdt,dt,i);
          j++;
        }
        if(expensedate.length>6){
          break;
        }
        expenseval.push(sum);
        earningval.push(sumearning);
        expensedate.push(dt.toLocaleString('default', { month: 'short',year :'2-digit' }));
        //console.log(sum,dt.getMonth());
        dt.setMonth(dt.getMonth()-1);
        dt.setDate(1);
      }
      setGraphdata({val:expenseval,date:expensedate,earningval:earningval});
      
    //console.log(graphdata);
    //console.log(expenseval);
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
    if (localStorage.getItem('user') === null) {
      console.log('logout');
      navigate('/login');
    }

    // Update the document title using the browser API
    else {
      FetchData();
    }
  }, []);
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
                paddingLeft: '0.6rem',
                paddingRight: '0.6rem'
              }}
            >
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Household value={houses} />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Shopping value={shopping} />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Loan value={inv} />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Misc
                  sx={{ bgcolor: '#ffcccb', color: '#000000', height: '100%' }}
                  value={misc}
                />
              </Grid>
            </Grid>
            <br></br>
          </Box>
          <br></br>
          <br></br>
          <Box className={classes.boxed}>
            <h3 className="formheading2">Types of Incomes</h3>
            <Grid
              container
              spacing={3}
              sx={{
                paddingLeft: '0.6rem',
                paddingRight: '0.6rem'
              }}
            >
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <SalariedIncome />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Buisnessincome />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Investmentincome />
              </Grid>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <MiscIncome
                  sx={{ bgcolor: '#adff7a', color: '#000000', height: '100%' }}
                />
              </Grid>
            </Grid>
            <br></br>
          </Box>
          <br></br>
          <br></br>

          <Grid container spacing={3}>
            <Grid item lg={12} md={12} xl={12} xs={12}>
              <Sales data={graphdata} />
            </Grid>

            <Grid item lg={6} md={6} xl={6} xs={12}>
              <TrafficByExpense sx={{ height: '100%' }} />
            </Grid>
            <Grid item lg={6} md={6} xl={6} xs={12}>
              <TrafficByExpense sx={{ height: '100%' }} />
            </Grid>
            <Grid item lg={12} md={12} xl={12} xs={12}>
              <LatestOrders />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Dashboard;
