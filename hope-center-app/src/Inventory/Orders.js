// import * as React from 'react';
// import Pagination from '@mui/material/Pagination';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import TextFields from '../components/Textfield';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import { Button } from '@mui/material';


// const page={
//   padding:'10px'
// }

// const btn2={
//   color: 'white',
//   backgroundColor:'black',
//   marginTop:'20px',
//   maxWidth:'5rem'
// }

// // Generate Order Data
// function createData(id, date, name, category, description, amount) {
//   return { id, date, name, category, description, amount };
// }

// const rows = [
//   createData(
//     0,
//     '8/16/2022',
//     'Diapers',
//     'BABY_DIAPER',
//     'Size 1'
//   ),
//   createData(
//     1,
//     '7/20/2022',
//     'Radio',
//     'ELECTRONICS',
//     'Set of 3'
//   ),

//   createData(
//     3,
//     '1/19/2022',
//     'Hoodie',
//     'ADULT_CLOTHING',
//     'Size XL'
//   ),
//   createData(
//     4,
//     '6/01/2022',
//     'Chapstick',
//     'ADULT',
//     '12 Packs of 2'
//   ),
//   createData(
//     5,
//     '9/10/2022',
//     'Soap',
//     'HYGIENE',
//     'Dove Sensitive Skin'
//   )
// ];

// // function preventDefault(event) {
// //   event.preventDefault();
// // }

// export default function Orders() {
//   return (
//     <React.Fragment>
//        <Box
//        backgroundColor="#1976D2"
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >

// <>
//       <h2 style={{
//         color: "white",
//         //textAlign:'center',
//         marginLeft:'-3.5rem'
//         // font-family: "Roboto"
//       }} >
//         Current Inventory</h2>
//       </>
//       <Button style={btn2} variant='contained' sx={{ position:'relative',left:"-9rem"}}>search</Button>
//       <TextField id="outlined-basic" label="Enter Product Name..." variant="outlined" sx={{background:"white", borderRadius:"5%", position:'relative',left:"-30rem"}}/>
   
//       </Box>
      
//       {/* <Title>Current Inventory</Title> */}
//       <Table size="small">
//         <TableHead>
//           <TableRow>
//             <TableCell>Date</TableCell>
//             <TableCell>Name</TableCell>
//             <TableCell><TextFields/></TableCell>
//             <TableCell>Description</TableCell>
//             <TableCell>Priority Need</TableCell>
//             <TableCell>Qty Type</TableCell>
//             <TableCell>Qty On Hand</TableCell>
//             <TableCell>Min. Qty</TableCell>
//             <TableCell>Max. Qty</TableCell>
//             <TableCell>Min. Order Qty</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.id}>
//               <TableCell>{row.date}</TableCell>
//               <TableCell>{row.name}</TableCell>
//               <TableCell>{row.category}</TableCell>
//               <TableCell>{row.description}</TableCell>
//               <TableCell>{row.priorNeed}</TableCell>
//               <TableCell>{row.qtyType}</TableCell>
//               <TableCell>{row.qtyOnHand}</TableCell>
//               <TableCell>{row.minQty}</TableCell>
//               <TableCell>{row.maxQty}</TableCell>
//               <TableCell>{row.minOrderQty}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <Pagination count={4} variant="outlined" style={page}/>
//     </React.Fragment>
//   );
// }


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

const handleSubmit = (event) => {
  console.log("submitted HERE")
  event.preventDefault();
   const table = new FormData(event.currentTarget);
  // const inventory = {
  //   name: data.get('name'),
  //   category: data.get('category'),
  //   description: data.get('description')
  };



export default function Orders() {
    
    const [inventory, setInventory]= useState([]);
   


   useEffect(() => {
      inventoryService.getAllInventory().then((response) => {
        setInventory(response.data)
        console.log(response.data).catch(error => console.log(error));
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