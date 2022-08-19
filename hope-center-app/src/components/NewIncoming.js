import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Avatar, Button, Paper, TextField, Typography, Link, Stack, Divider } from '@mui/material';
import RoomServiceIcon from '@mui/icons-material/RoomService';




const NewIncoming = () => {
 

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
    const divide={
      padding:'10px'
    }
  const header={
    color:'blue'
  }


    return(
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid >
            <Paper elevation={10} style={paperStyle} >

                <Grid align="center">
                <Avatar style={avatarStyle}><RoomServiceIcon  /></Avatar>
                <h4 style={header}>Incoming Donations</h4>
                </Grid> 
                
                <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                <TextField 
                    style={textfield} 
                    autoComplete="given-name"
                    name="date"
                    required
                    fullWidth
                    id="date"
                    label="Date"
                    autoFocus
                  >
                  
                </TextField>  
                </Grid>

                <Grid item xs={12}>
                <TextField 
                    style={textfield} 
                    required
                    fullWidth
                    id="name"
                    label="Name of Item"
                    name="lastName"
                    autoComplete="family-name"
                  >
                </TextField>  
                </Grid>

                <Grid item xs={12}>
                <TextField 
                    style={textfield} 
                    required
                    fullWidth
                    id="category"
                    label="Category"
                    name="category"
                    autoComplete="category"
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
                    id="description"
                    label="Description"
                    name="description"
                    autoComplete="description"
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

export default NewIncoming;