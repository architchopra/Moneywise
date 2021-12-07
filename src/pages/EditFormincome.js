import React from 'react';
import { Container, Card, FormControl, MenuItem } from '@material-ui/core';
import {Alert,Collapse,IconButton} from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useState,useEffect } from 'react';
import '../index.css';
import InputLabel from '@material-ui/core/InputLabel';
import api from '../api';
import Select from '@material-ui/core/Select';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@material-ui/system';
import './bubble.scss';
const useStyles = makeStyles(() => ({
  root: {
    marginTop: '5rem',
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
    marginTop: '3rem',
    marginBottom: '3rem'
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

const EditFormincome = () => {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [btnDisabled1, setBtnDisabled1] = useState(true);
  const [btnDisabled2, setBtnDisabled2] = useState(true);
  const [btnDisabled3, setBtnDisabled3] = useState(true);
  const [open,setOpen]=useState(false);
  const [message,setmsg]=useState("");
  const [sever,setSever]=useState("info");
  const classes = useStyles();
  // create state variables for each input
  const [expense, setExpense] = useState('');
  const [cost, setCost] = useState('');
  // const [textValue, setTextValue] = useState('');
  const [dates, setDates] = useState('');
  // const [,feedbackValue, setTextValue] = useState("");
                                                                                                                                                                                                                                                                                                                                                                                                                         
  const onExpenseChange = (e) => {
    setExpense(e.target.value);
    setBtnDisabled1(!e.target.value.length)
  };
  const onCostChange = (e) =>{ 
    setCost(e.target.value);
    setBtnDisabled2(!e.target.value.length);
  }
  const onDateChange = (e) => {
    setDates(e.target.value);
    setBtnDisabled3(!e.target.value.length);
  }
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
      .post('/api/private/earnings/add', { type, cost,date:dates }, config)
      .catch((error) => {
        setSever("error");
        setmsg(error.message);
        console.log(error.message);
        return;
      });
      setOpen(true);
      if(data){
        setSever("success");
        setmsg(data.data.data);
        console.log(dates);
      }
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
  useEffect(() => {
    setBtnDisabled((btnDisabled2||btnDisabled1||btnDisabled3));
   }, [btnDisabled1,btnDisabled2,btnDisabled3]);
  return (
    <Box component="form" noValidate autoComplete="off">
      <div style={{backgroundColor:"#006400"}}>
      <div class="bubbles">
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
  <div class="bubble"></div>
      <ThemeProvider theme={theme}>
        <Container maxWidth="md" sx={{position:'absolute', zIndex:1,top: '40%', left: '50%',marginRight: '-50%',transform: 'translate(-50%, -50%)'}}>
          <Card className={classes.root}>
            <Container maxWidth="sm">
              <div className={classes.form}>
                <h3 className="formheading">Add your Income</h3>
                <Collapse in={open}>
                    <Alert severity={sever}
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
                  <InputLabel id="demo-simple-select-label">
                    TYPE OF INCOME
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={expense}
                    onChange={onExpenseChange}
                    label="TYPE OF INCOME "
                  >
                    <MenuItem value="salried">Salary Income(Fixed Income)</MenuItem>
                    <MenuItem value="buisness">Income from buisness</MenuItem>
                    <MenuItem value="inc">
                      Income from investments
                    </MenuItem>
                    <MenuItem value="miscinc">Miscellenious Income</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  label=" Enter the Amount"
                  onChange={onCostChange}
                  InputLabelProps={{
                    shrink: true
                  }}
                  className={classes.field}
                  variant="outlined"
                  value={cost}
                  required
                  sx={{ marginLeft: "0.5em"}}
                  type="number"
                  // value={password}
                  // onChange={e => setPassword(e.target.value)}
                />
                <TextField
                  id="date"
                  label="Date"
                  type="date"
                  defaultValue="2021-12-8"
                  // value={dat.date}
                  onChange={onDateChange}
                  className={classes.field}
                  sx={{ width: 220,marginLeft: "5em" }}
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
                    disabled={btnDisabled}
                    color="success"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </Container>
          </Card>
        </Container>
      </ThemeProvider>
      </div>
      </div>
    </Box>
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

export default EditFormincome;
