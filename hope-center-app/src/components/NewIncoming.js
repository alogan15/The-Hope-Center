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
import { useState } from "react";
import { useParams } from "react-router-dom";
import * as inventoryService from '../services/InventoryService';

export default function NewIncoming() {
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




  const navigate = useNavigate();
  const {id} = useParams();
  const [name, setName] = useState('')
  const [category, setcategoryType] = useState('')
  const [description, setDescription] = useState('')
  // const [quantityType, setQuantityType] = useState('')

const handleSubmit = (event) => {
  console.log("submitted HERE")
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const inventory = {
    name: data.get('name'),
    categoryType: data.get('categoryType'),
    description: data.get('description'),
    // quantityType: data.get('quantityType')


    category: data.get('category'),
    description: data.get('description')
  };

  inventoryService.createInventory(inventory)
  .then(response => {
    navigate("/inventory");
  })

};



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
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name of Item"
                name="name"
                autoComplete="name"
                autoFocus
                value={name}
                onChange= {(e) => setName(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="category"
                label="Category Type"
                id="category"
                autoComplete="category"
                value={category}
                onChange= {(e) => setcategoryType(e.target.value)}
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
                value={description}
                onChange= {(e) => setDescription(e.target.value)}
              />
              {/* <TextField
                margin="normal"
                required
                name="quantityType"
                label="Quantity Type"
                id="quantityType"
                autoComplete="quantityType"
                value={quantityType}
                onChange= {(e) => setQuantityType(e.target.value)}
              /> */}
              <Stack>

              {/* <Link to="/donatehome"> */}

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