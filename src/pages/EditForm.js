import React from 'react';
import { Container, Card, FormControl, MenuItem } from '@material-ui/core'
import {Alert,Collapse,IconButton} from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useState } from 'react';
import '../index.css';
import InputLabel from '@material-ui/core/InputLabel';
import api from '../api';
import Select from '@material-ui/core/Select';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '7rem',
    flexDirection: 'column',
    marginBottom: '4rem'
  },
  heading: {
    fontSize: '2rem',
    justifyContent: 'left',
    alignItems: 'left'
  },
  form: {
    width: '100%',
    justifyContent: 'left',
    alignItems: 'left'
  },
  text: {
    marginLeft: '0.1rem'
  },
  field: {
    marginTop: '2rem',
    marginBottom: '2rem'
  },
  btn: {
    marginLeft: '2%',
    marginBottom: '1rem'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '95%'
  }
}));
const theme = createTheme({
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(',')
  }
});

// const handleSubmit=()=>{
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getUser());
//   }, [dispatch]);

//   // const user = useSelector((state) => state.user.user);
//   // console.log(user);
// };

const Form = () => {
  const [open,setOpen]=useState(false);
  const [message,setmsg]=useState("");
  const classes = useStyles();
  // create state variables for each input
  const [expense, setExpense] = useState('');
  const [cost, setCost] = useState('');
  const [dates, setDates] = useState('');
  // const dat = {
  //   date: { dates }
  // };
  // const [,feedbackValue, setTextValue] = useState("");

  const onExpenseChange = (e) => setExpense(e.target.value);
  const onCostChange = (e) => setCost(e.target.value);
  const onDateChange = (e) => setDates(e.target.value);
  // const handleReset = () => setTextValue("");

  async function fetchData() {
    const type = expense;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        token: JSON.parse(localStorage.getItem('user')).token
      }
    };
    //console.log(JSON.parse(localStorage.getItem("user")).token);
    // const {data} = await api.post('/api/private/mails',{},config).catch((error)=>{console.log(error)});
    // console.log(data);
    const data = await api
      .post('/api/private/expenses/add', { type, cost,date:dates }, config)
      .catch((error) => {
        setmsg(error.message);
        console.log(error.message);
        return;
      });
      setOpen(true);
    console.log(data);
    if(data){
      setmsg(data.data.data);
      console.log(dates);
    }
    // formData.append("type", expense);S
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

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  return (
    <form noValidate autoComplete="off">
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <Card className={classes.root}>
            <Container maxWidth="sm">
              <div className={classes.form}>
                <h3 className="formheading">Contact us | Moneywise</h3>        
                <Collapse in={open}>
                    <Alert
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                      }
                      sx={{ mb: 2 }}
                    >
                      {message}
                    </Alert>
                  </Collapse>
                <FormControl className={classes.formControl}>
                  <InputLabel
                    id="demo-simple-select-label"
                    InputLabelProps={{
                      shrink: true
                    }}
                  >
                    TYPE OF EXPENSE
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={expense}
                    onChange={onExpenseChange}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  >
                    <MenuItem value="household">Household Expense</MenuItem>
                    <MenuItem value="shopping">Shopping Expense</MenuItem>
                    <MenuItem value="investment">
                      Investment and Loan Expense
                    </MenuItem>
                    <MenuItem value="misc">Miscellenious Expense</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  label=" How can we assist you?"
                  onChange={onCostChange}
                  InputLabelProps={{
                    shrink: true
                  }}
                  className={classes.field}
                  variant="outlined"
                  value={cost}
                  required
                  fullWidth

                  // value={password}
                  // onChange={e => setPassword(e.target.value)}
                />
                <TextField
                  id="date"
                  label="Date"
                  type="date"
                  defaultValue="2017-05-24"
                  // value={dat.date}
                  onChange={onDateChange}
                  sx={{ width: 220 }}
                  InputLabelProps={{
                    shrink: true
                  }}
                  required
                  fullWidth
                />
                <div>
                  <Button
                    variant="contained"
                    className="btnsend"
                    endIcon={<ArrowForwardIcon />}
                    onClick={handleSubmit}
                  >
                    Send
                  </Button>
                </div>
              </div>
            </Container>
          </Card>
        </Container>
      </ThemeProvider>
    </form>
  );
};
// const handleSubmit=()=>{
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getUser());
//   }, [dispatch]);

//   // const user = useSelector((state) => state.user.user);
//   // console.log(user);
// };

export default Form;
