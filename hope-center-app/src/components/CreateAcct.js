import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DropDown from './DropDown';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/system';
// import DropDown from './DropDown';
import {  useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';




const theme = createTheme();

const title={
    color:'blue'
}
// describing the object
const formValidationschema = yup.object({
  firstName: yup
    .string("Kalyn")
    .required("Your first name is required"),

  lastName: yup
  .string("Smith")
  .required("Your last name is required"),

  email:yup
  .string("Kalyn@gmail.com")
  .email("Invalid email format")
  .required("Email is required"),

  phoneNumber:yup
  .string("678-999-8212")
  .required("Phone number is required"),

  password:yup
  .string("Test1")
  .required("Password is required"),

  confirmPassword:yup
  .string("Test1")
  .required("Password is required")

})

export default function CreateAccount() {
  const formik = useFormik({
    initialValues:{
      firstName:"",
      lastName:"",
      email:"",
      phoneNumber:"",
      password:"",
      confirmPassword:""
    },
    validationSchema: formValidationschema,
    onSubmit:(values)=>{
      axios.post('http://localhost:8080/api/vi/user',values)
      .then(response=>{
        console.log(response)
      })
    }
  })
  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         <Typography component="h1" variant="h3" style={title}>
            <b>The Hope Center</b>
         </Typography>
          <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formik.values.firstName}
                  onChange = {formik.handleChange}
                  error = {formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={formik.values.lastName}
                  onChange = {formik.handleChange}
                  error = {formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                //   id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formik.values.email}
                  onChange = {formik.handleChange}
                  error = {formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="phone-number"
                  value={formik.values.phoneNumber}
                  onChange = {formik.handleChange}
                  error = {formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                  helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                //   id="password"
                  autoComplete="new-password"
                  value={formik.values.password}
                  onChange = {formik.handleChange}
                  error = {formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                //   id="confirmPassword"
                  autoComplete="new-password"
                  value={formik.values.confirmPassword}
                  onChange = {formik.handleChange}
                  error = {formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                  helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
               
                />
              </Grid>

              <Grid item xs={12}>
              {/* <DropDown /> */}
              </Grid>
            </Grid>
            <Stack>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Account
            </Button>
            <Link to="/donatehome">
              <Button>back</Button>
            </Link>
            </Stack>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}