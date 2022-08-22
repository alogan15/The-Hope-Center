import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Avatar, Button, Paper, TextField, Stack } from '@mui/material';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import { Link } from 'react-router-dom';
import {useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import * as inventoryService from '../services/InventoryService';


const NewIncoming = () => {
  
    const form={
    
      marginTop:'5rem'
    }

    const paperStyle={
        padding: "20px",
        height: 'auto',
        width: 380,
        margin: "20px auto",
        
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

  const navigate = useNavigate();
  const {id} = useParams();
  const [name, setName] = useState('')
  const [categoryType, setCategoryType] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (event) => {
    console.log("submitted HERE")
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const inventory = {
      name: data.get('name'),
      categoryType: data.get('categoryType'),
      description: data.get('description')
    };

    inventoryService.createInventory(inventory)
    .then(response => {
      navigate("/inventory");
    })

  };

    return(
      
      <Box style={form} component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
         
        <Grid >
            <Paper elevation={10} style={paperStyle} >

                <Grid align="center">
                <Avatar style={avatarStyle}><RoomServiceIcon  /></Avatar>
                <h4 style={header}>Incoming Donations</h4>
                </Grid> 
                
                <Grid container spacing={1}>
                <Grid item xs={12}>
                <TextField 
                    style={textfield} 
                    required
                    fullWidth
                    id="name"
                    label="Name of Item"
                    name="lastName"
                    autoComplete="family-name"
                    value={name}
                    onChange= {(e) => setName(e.target.value)}
                  >
                </TextField>  
                </Grid>

                <Grid item xs={12}>
                <TextField 
                    style={textfield} 
                    required
                    fullWidth
                    id="categoryType"
                    label="Category Type"
                    name="categoryType"
                    autoComplete="category"
                    value={categoryType}
                    onChange= {(e) => setCategoryType(e.target.value)}
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
                    value={description}
                    onChange= {(e) => setDescription(e.target.value)}
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