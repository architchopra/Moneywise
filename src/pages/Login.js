import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Backdrop,
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography
} from '@material-ui/core';
import GoogleLogin from 'react-google-login';
import api from '../api';
import im from '../images/loginimage5.jpg';
const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = async (res) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      console.log(res);
      const { data } = await api
        .post('api/auth/gauth', { code: res.code }, config)
        .catch((error) => {
          console.log(error);
        });
      localStorage.setItem('user', JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
    if (localStorage.getItem('user') != null) {
      navigate('/');
    }
  };
  return (
    <>
      <Helmet>
        <title>Login | MoneyWise</title>
      </Helmet>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
          backgroundImage: `url(${im})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <Container maxWidth="sm" sx={{ backgroundColor: 'background.default',opacity: ".9" }}>
          <Formik
            initialValues={{
              email: 'demo@devias.io',
              password: 'Password123'
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={async (values) => {
              const { data } = await api.post('api/auth/login', {
                email: values.email,
                password: values.password
              });
              localStorage.setItem('user', JSON.stringify(data));
              navigate('/app/dashboard', { replace: true });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mt: 3, mb: 2 }}>
                  <Typography color="textPrimary" variant="h2"sx={{ justifyContent:"center",textAlign:"center"}}>
                    Sign in
                  </Typography>
                  <Typography color="textSecondary" variant="body2" sx={{ justifyContent:"center",textAlign:"center"}}>
                    Sign in on the internal platform
                  </Typography>
                </Box>

                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="medium"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                </Box>

                <Box
                  sx={{
                    pb: 0.5,
                    pt: 0.5
                  }}
                >
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                    or
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '80%',
                    justifyContent: 'center',
                    margin: '0.5em'
                  }}
                >
                  <GoogleLogin
                    clientId={process.env.REACT_APP_CLIENT_ID}
                    render={(renderProps) => (
                      <button
                        style={{
                          backgroundColor: 'rgb(255, 255, 255)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          color: 'rgba(0, 0, 0, 0.54)',
                          boxShadow:
                            'rgb(0 0 0 / 24%) 0px 2px 2px 0px, rgb(0 0 0 / 24%) 0px 0px 1px 0px',
                          cursor:"pointer",
                          borderRadius: '2px',
                          border: ' 1px solid transparent',
                          fontSize: '1em',
                          fontWeight: '500',
                          fontFamily: 'Roboto, sans-serif',
                          height: '3em',
                          justifyContent: 'center !important'
                        }}
                      
                         
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        <img
                        style={{height:"1.5rem",marginTop:"7px",marginRight:"1em",marginLeft:"30%" }}
                         
                          alt="Google sign-in"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                        />
                      Sign in with Google
                      </button>
                    )}
                    buttonText="                             Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    accessType="offline"
                    responseType="code"
                    scope="https://www.googleapis.com/auth/gmail.readonly"
                    cookiePolicy={'single_host_origin'}
                  />
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                 
                  sx={{ justifyContent:"center",textAlign:"center",mb: 3,mt: 2}}
                >
                  Don&apos;t have an account?{' '}
                  <Link
                    component={RouterLink}
                    to="/register"
                    variant="h6"
                    underline="hover"
                  >
                    Sign up
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;
