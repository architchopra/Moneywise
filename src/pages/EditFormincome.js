import React from 'react';
import { Container, Card, FormControl, MenuItem } from '@material-ui/core';
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
  const classes = useStyles();
  // create state variables for each input
  const [expense, setExpense] = useState('');
  const [cost, setCost] = useState('');
  // const [textValue, setTextValue] = useState('');
  const [dates, setDates] = useState('');
  // const [,feedbackValue, setTextValue] = useState("");

  const onExpenseChange = (e) => setExpense(e.target.value);
  const onCostChange = (e) => setCost(e.target.value);
  const onDateChange = (e) => setDates(e.target.value);
  // const handleReset = () => setTextValue('');

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
      .post('/api/private/expenses/add', { type, cost }, config)
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
    console.log(dates);
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
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    TYPE OF Incomes
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={expense}
                    onChange={onExpenseChange}
                  >
                    <MenuItem value="household">Salary Income(Fixed Income)</MenuItem>
                    <MenuItem value="shopping">Income from buisness</MenuItem>
                    <MenuItem value="investment">
                      Income from investments
                    </MenuItem>
                    <MenuItem value="misc">Miscellenious Income</MenuItem>
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
