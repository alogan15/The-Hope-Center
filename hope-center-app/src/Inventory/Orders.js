import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import * as inventoryService from '../services/InventoryService';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from '@mui/material';

  

  const title={
    color:'blue'
}

const btn2={
  color: 'white',
  backgroundColor:'black',
  marginTop:'20px',
  maxWidth:'5rem'
}



// const handleSubmit = (event) => {
//   console.log("submitted HERE")
//   event.preventDefault();
//    const table = new FormData(event.currentTarget);
//   const inventory = {
//     name: data.get('name'),
//     category: data.get('category'),
//     description: data.get('description')
//   };


export default function Orders() {
    
  const [inventory, setInventory]= useState([]);
  
    useEffect(()=> {
        inventoryService.getAllInventory()
        .then(res => {
            setInventory(res.data);
        })
    }, [])
  

    return (
        <div >
          <React.Fragment>
       <Box
        backgroundColor="#1976D2"
       component="form"
       sx={{
         '& > :not(style)': { m: 1, width: '25ch' },
       }}
       noValidate
       autoComplete="off"
     >


 <>
       <h2 style={{
         color: "white",
         //textAlign:'center',
        marginLeft:'-3.5rem'
         // font-family: "Roboto"
       }} >
         Current Inventory</h2>
      </>
       <Button style={btn2} variant='contained' sx={{ position:'relative',left:"-9rem"}}>search</Button>
      <TextField id="outlined-basic" label="Enter Product Name..." variant="outlined" sx={{background:"white", borderRadius:"5%", position:'relative',left:"-30rem"}}/>
   
       </Box>
            <Typography component="h1" variant="h3" style={title}>
            <b>The Hope Center</b>
            </Typography>
            <Typography>Current Inventory</Typography>
            <Table sx={{minWidth:700}}>
                <TableHead sx={{}}>
                <TableRow>
                    <TableCell>
                        Id
                    </TableCell>                        
                    <TableCell>
                      Name
                    </TableCell>
                    <TableCell>
                        Category Type
                    </TableCell>
                    <TableCell>

                      Quantitiy
                    </TableCell>
                    <TableCell>
                       Description
                    </TableCell>

                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        inventory.map((table)=> {
                            return(
                                <TableRow
                                    hover
                                    key={table.id}
                                >
                                    <TableCell>
                                        {table.id}
                                    </TableCell>
                                    <TableCell>
                                        {table.name}
                                    </TableCell>
                                    <TableCell>

                                        {table.category}
                                    </TableCell>
                                    <TableCell>{table.quantity}</TableCell>
                                    <TableCell>
                                        {table.description}
                                    </TableCell>

                                </TableRow>
                            ) 
                        })
                    }
                </TableBody>
            </Table>
            </React.Fragment>
        </div>
    )
}
