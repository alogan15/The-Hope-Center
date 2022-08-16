import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextFields from './Textfield';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';




const theme = createTheme();

const title={
    color:'blue'
}



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function MonetaryDonate() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

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
         
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                />
              <Grid item xs={4}>
              <TextFields />
              </Grid>
              </Grid>
            <Grid>
            <Typography>Donation Amount:</Typography>
            <FormControlLabel
                value="bottom"
                control={<Checkbox />}
                label="$25"
                labelPlacement="bottom"
             />
             <FormControlLabel
                value="bottom"
                control={<Checkbox />}
                label="$50"
                labelPlacement="bottom"
             />
             <FormControlLabel
                value="bottom"
                control={<Checkbox />}
                label="$75"
                labelPlacement="bottom"
             />
             <FormControlLabel
                value="bottom"
                control={<Checkbox />}
                label="$100"
                labelPlacement="bottom"
             />
            </Grid>
            <Grid>
            <Typography>Payment Information:</Typography>
            <FormControlLabel
                value="bottom"
                control={<Checkbox />}
                label="Check"
                labelPlacement="bottom"
             />
             <FormControlLabel
                value="bottom"
                control={<Checkbox />}
                label="Cash"
                labelPlacement="bottom"
             />
             <FormControlLabel
                value="bottom"
                control={<Checkbox />}
                label="Credit/Debit"
                labelPlacement="bottom"
             />
             <FormControlLabel
                value="bottom"
                control={<Checkbox />}
                label="Money Order"
                labelPlacement="bottom"
             />
            </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="nameOnCard"
                  label="Name On Card"
                  name="nameOnCard"
                  autoComplete="name-on-card"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="cardNumber"
                  label="Card Number"
                  autoComplete="card-number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  name="expDate"
                  label="Expiration Date"
                  autoComplete="exp-date"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  name="ccv"
                  label="CCV"
                  autoComplete="ccv"
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