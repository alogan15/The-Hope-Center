import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate } from "react-router-dom";
import * as inventoryService from '../services/InventoryService';
import { useState } from "react";
import { useParams } from "react-router-dom";


const theme = createTheme();
// const formValidationSchema = yup.object({
//   name: yup
//     .string("enter product")
//     .required("enter your product"),
//   description: yup
//     .string("enter description")
//     .required("enter your description"),
//   category: yup
//     .string("enter category")
//     .required("enter a category")
// })



const title={
    color:'blue'
}

export default function DonateForm() {
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       description: "",
//       category: ""
//     },
//     validationSchema: formValidationSchema,
//       onSubmit:(values) => {
//         axios.post('http://localhost:8080/api/vi/inventory', values)
//         .then(response => {
//           console.log(response);
//   })
// }
// })

  const navigate = useNavigate();
  const {id} = useParams();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const inventory = {
      name: data.get('name'),
      category: data.get('category'),
      description: data.get('description')
    };

    inventoryService.createInventory(inventory)
    .then(response => {
      navigate("/");
    })
  }



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
         <Typography><b>Incoming Donations</b></Typography>
         
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Name of Item"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  value={name}
                  onChange= {(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="category"
                  label="Category"
                  autoComplete="category"
                  value={category}
                  onChange= {(e) => setCategory(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  rows={7}
                  name="description"
                  label="Description"
                  autoComplete="description"
                  value={description}
                  onChange= {(e) => setDescription(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
  