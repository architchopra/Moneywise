import React from "react";
import { Container, makeStyles, Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useState } from "react";

import axios from "axios";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    marginTop: "7rem",
    flexDirection: "column",
    marginBottom: "4rem",
  },
  heading: {
    fontSize: "2rem",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginLeft: "0.5rem",
  },
  field: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  btn: {
    marginLeft: "42%",
    marginBottom: "1rem",
  },
}));
const theme = createTheme({
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
  },
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
  const [emailValue, setEmailValue] = useState("");
  const [feedbackValue, setFeedbackValue] = useState("");
  const [textValue, setTextValue] = useState("");
  // const [,feedbackValue, setTextValue] = useState("");

  const onEmailChange = (e) => setEmailValue(e.target.value);
  const onFeedbackChange = (e) => setFeedbackValue(e.target.value);
 
  const handleReset = () => setTextValue("");

  async function fetchData() {
    const formData = new FormData();

    formData.append("EMAIL", emailValue);
    formData.append('MESSAGE', feedbackValue);

   // const state = { EMAIL:emailValue,MESSAGE:feedbackValue}
    console.log(formData);
    //  const dispatch = useDispatch();
    // dispatch(postUserData());

    const { data } = await axios.post(
      'https://zxtsbd2v6e.execute-api.us-east-1.amazonaws.com/prod/support',
      formData
   )
   // setFetchedData(data)
  }



  const handleSubmit = e => {
    e.preventDefault()
    fetchData()
  }
  return (
    <form noValidate autoComplete="off">
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <Card className={classes.root}>
            <Container maxWidth="sm">
              <div className={classes.form}>
                <H3 className="formheading">Contact us | Monk</H3>

                <TextField
                  label="Enter your email:"
                  onChange={onEmailChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  type="email"
                  value={emailValue}
                  required
                  fullWidth
                  placeholder="your@email.com"
                />

                <TextField
                  label=" How can we assist you?"
                  onChange={onFeedbackChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  className={classes.field}
                  variant="outlined"
                  value={feedbackValue}
                  required
                  fullWidth
                  multiline
                  rows={4}

                  // value={password}
                  // onChange={e => setPassword(e.target.value)}
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
