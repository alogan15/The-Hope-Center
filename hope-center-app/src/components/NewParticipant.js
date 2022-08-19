import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Avatar, Button, Paper, TextField, Stack } from '@mui/material';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import { Link } from 'react-router-dom';




const NewParticipant = () => {
 

    const paperStyle={
        padding: "20px",
        height: 'auto',
        width: 380,
        margin: "20px auto"
    }
    const avatarStyle={
        backgroundColor: "blue"
    }
    const textfield={
        margin: '10px',
        color:'blue'
    }
    const btnstyle={
        margin:'15px 0',
        color:'white',
        backgroundColor:'blue',
        padding: '7px'
    }
  
  const header={
    color:'blue'
  }


    return(
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid >
            <Paper elevation={10} style={paperStyle} >

                <Grid align="center">
                <Avatar style={avatarStyle}><RecordVoiceOverIcon   /></Avatar>
                <h4 style={header}>Participant Request Form</h4>
                </Grid> 
                
                <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                <TextField 
                    style={textfield} 
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  >
                  
                </TextField>  
                </Grid>

                <Grid item xs={12} sm={6}>
                <TextField 
                    style={textfield} 
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  >
                </TextField>  
                </Grid>

                <Grid item xs={12} sm={6}>
                <TextField 
                    style={textfield} 
                    required
                    fullWidth
                    id="room"
                    label="Room Number"
                    name="room"
                    autoComplete="room"
                >
                </TextField>  
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField 
                    style={textfield} 
                    required
                    fullWidth
                    id="family"
                    label="Family Size"
                    name="family"
                    autoComplete="family"
                >
                </TextField>  
                </Grid>
                <Grid item xs={12}>
                <TextField 
                    style={textfield} 
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                >
                </TextField>  
                </Grid>
                <Grid item xs={12}>
                <TextField 
                    style={textfield} 
                    required
                    fullWidth
                    rows={4}
                    multiline
                    id="items"
                    label="Items Needed"
                    name="items"
                    autoComplete="items"
                >
                </TextField>
                </Grid>
                </Grid>
                <Stack justifyContent='center'>
              
                <Button
                    type="submit" 
                    color="primary" 
                    variant="contained" 
                    style={btnstyle}
                  
                   
                > 
                    Submit
                </Button>
                <Link to="/donatehome">
                    <Button>back</Button>
                </Link>
                </Stack>
                
            </Paper>
         
            
        </Grid>
        </Box>


     
        
    )
}

export default NewParticipant;