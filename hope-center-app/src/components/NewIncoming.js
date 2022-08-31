import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Avatar } from '@mui/material';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Stack } from '@mui/system';
import {useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

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
  name: yup
      .string("Name")
      .required("An item name is required"),

  description: yup
      .string("description")
      .required("A description is required"),

  quantity: yup
  .number("24")
  .required("A quantity is required"),
 
  category:yup
  .string("category")
  .required("Please select a category"),
})

export default function NewIncoming() {
  const navigate = useNavigate();

const formik = useFormik({
  initialValues: {
      name: "",
      description: "",
      category: "",
      quantity: "",
  },
  validationSchema: formValidationschema,
  onSubmit:(values)=>{
      axios.post('http://localhost:8080/api/vi/inventory',values)
      .then(response=>{
          console.log(response);
          
               navigate("/inventory");
      }
      )
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
          <Avatar style={avatarStyle}><RoomServiceIcon  /></Avatar>
          <Typography component="h3" variant="h4" style={title}>
            Incoming Donations
          </Typography>
            <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name of Item"
                name="name"
                autoComplete="name"
                autoFocus
                value={formik.values.name}
                onChange = {formik.handleChange}
                error= {formik.touched.name && Boolean(formik.errors.name)}
                helperText= {formik.touched.name && formik.errors.name}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="category"
                label="Category"
                id="category"
                autoComplete="category"
                value={formik.values.category}
                onChange = {formik.handleChange}
                error= {formik.touched.category && Boolean(formik.errors.category)}
                helperText= {formik.touched.category && formik.errors.category}
              />
              
              <TextField
                margin="normal"
                required
                fullWidth
                rows={5}
                multiline
                name="description"
                label="Description"
                id="description"
                autoComplete="description"
                value={formik.values.description}
                onChange = {formik.handleChange}
                error= {formik.touched.description && Boolean(formik.errors.description)}
                helperText= {formik.touched.description && formik.errors.description}
              />

               <TextField
                margin="normal"
                required
                name="quantity"
                label="quantity"
                id="quantity"
                autoComplete="quantity"
                value={formik.values.quantity}
                onChange = {formik.handleChange}
                error= {formik.touched.quantity && Boolean(formik.errors.quantity)}
                helperText= {formik.touched.quantity && formik.errors.quantity}
              /> 
              <Stack>

              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>

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