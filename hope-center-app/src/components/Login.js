import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';

const theme = createTheme();
const title={
    color:'blue'
}

const remember={
    marginRight:'5rem'
}

const btn={
  marginTop:'6rem',
  marginLeft:'-5rem'
}

const forgot={
    marginRight:'50px',
    color:'black'
}

const create={
    color:'black'
}

const box={
  marginTop:'35rem'
}



export default function Login() {
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
            width: 500,
            height: 200,
          }}
          
        >
         <Paper elevation={24} style={box}>
        <Box component="form" sx={{ mt: 3 }}>
          <Typography component="h1" variant="h3" style={title}>
            {/* <b>The Hope Center</b> */}
         </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
            //   id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              variant='filled'
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
            //   id="password"
              autoComplete="current-password"
              variant='filled'
            />
            <FormControlLabel
              // style={remember}
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Link to="/donatehome">
            <Button
              style={btn}
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            </Link>
            <Grid container>
              <Grid item xs>
                <Link to="/forgotpwd" style={forgot}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup" style={create}>
                  Create Account
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        </Paper>
        </Box>
      </Container>
    </ThemeProvider>

  )
}
