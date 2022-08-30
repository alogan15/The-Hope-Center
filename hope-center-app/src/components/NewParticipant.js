import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Avatar } from '@mui/material';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Stack } from '@mui/system';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://ncchopecenterinc.com/">
       NCC Hope Center, Inc.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
    typography:{
        allVariants: {
            fontFamily: 'serif'
        }
    }
});



const title={
    color:'blue'
}

const avatarStyle={
  color:'blue'
}

const formValidationschema = yup.object({
  firstName: yup
      .string("Jordan")
      .required(" Your first name is required"),

  lastName: yup
      .string("Eldridge")
      .required(" Your last name is required"),

  email: yup
  .string("Jordan@codedifferently.com")
  .email("Invalid email format")
  .required("Email is required"),

  roomNumber: yup
  .string("13")
  .required("Room Number is required"),
  
  familySize:yup
  .string("3")
  .required("Family Size is Required"),

  itemsNeeded:yup
  .string("Diapers , wipes , food")
  .required("Please list your items"),


})

export default function NewParticipant() {
  const formik = useFormik({
    initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        roomNumber: "",
        familySize: "",
        itemsNeeded: "",

    },
    validationSchema: formValidationschema,
    onSubmit:(values)=>{
        axios.post('http://localhost:8080/api/vi/productRequest',values)
        .then(response=>{
            console.log(response)
        })
    }
})
  

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://www.newcastlede.gov/ImageRepository/Document?documentID=46217)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
             <Avatar style={avatarStyle}><RecordVoiceOverIcon   /></Avatar>
            <Typography component="h1" variant="h4" style={title}>
            Participant Request
         </Typography>
            <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
            <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
            <TextField
                margin="normal"
                required
                fullWidth
                name="firstName"
                label="First Name"
                id="firstName"
                autoComplete="firstName"
                value={formik.values.firstName}
                  onChange = {formik.handleChange}
                  error= {formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText= {formik.touched.firstName && formik.errors.firstName}
              />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="lastName"
                label="Last Name"
                id="lastName"
                autoComplete="lastName"
                value={formik.values.lastName}
                  onChange = {formik.handleChange}
                  error= {formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText= {formik.touched.lastName && formik.errors.lastName}
              />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="roomNumber"
                label="Room Number"
                id="roomNumber"
                autoComplete="roomNumber"
                value={formik.values.roomNumber}
                onChange = {formik.handleChange}
                error= {formik.touched.roomNumber && Boolean(formik.errors.roomNumber)}
                helperText= {formik.touched.roomNumber && formik.errors.roomNumber}
              />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="familySize"
                label="Family Size"
                id="familySize"
                autoComplete="familySize"
                value={formik.values.familySize}
                onChange = {formik.handleChange}
                error= {formik.touched.familySize && Boolean(formik.errors.familySize)}
                helperText= {formik.touched.familySize && formik.errors.familySize}
              />
              </Grid>
              </Grid>
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email"
                id="email"
                autoComplete="email"
                value={formik.values.email}
                onChange = {formik.handleChange}
                error= {formik.touched.email && Boolean(formik.errors.email)}
                helperText= {formik.touched.email && formik.errors.email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                rows={5}
                multiline
                name="itemsNeeded"
                label="Items Needed"
                id="itemsNeeded"
                autoComplete="itemsNeeded"
                value={formik.values.itemsNeeded}
                onChange = {formik.handleChange}
                error= {formik.touched.itemsNeeded && Boolean(formik.errors.itemsNeeded)}
                helperText= {formik.touched.itemsNeeded && formik.errors.itemsNeeded}
              />
              <Stack>
              {/* <Link to=""> */}
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
              {/* </Link> */}
                <Link to="/donatehome">
                    <Button>back</Button>
                 </Link>
              </Stack>
              <Grid container>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}