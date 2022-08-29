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



export default function InventoryCount() {

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
      
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
           Inventory Count
         </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name of Item"
                name="name"
                autoComplete="name"
                autoFocus
               
               
              />
              <TextField
                margin="normal"
                required
                fullWidth
               
                label="Category"
                id="category"
                autoComplete="category"
               
              />
              <TextField
                margin="normal"
                required
                fullWidth
                rows={5}
                multiline
               
                label="Description"
                id="description"
                autoComplete="description"
               
              />
              <Link to="/donatehome">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Save
              </Button>
              </Link>
              <Grid container>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}