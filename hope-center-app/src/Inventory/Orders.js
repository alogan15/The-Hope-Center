import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import TextFields from '../components/Textfield';





// Generate Order Data
function createData(id, date, name, category, paymentMethod, amount) {
  return { id, date, name, category, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    '8/16/2022',
    'Diapers',
    'BABY_DIAPER'
  ),
  createData(
    1,
    '7/20/2022',
    'Radio',
    'ELECTRONICS'
  ),

  createData(
    3,
    '01/19/2022',
    'Hoodie',
    'ADULT_CLOTHING'
  ),
  createData(
    4,
    '06/01/2022',
    'Chapstick',
    'ADULT'
  ),
  createData(
    5,
    '09/10/2022',
    'Soap',
    'HYGIENE'
  )
];

// function preventDefault(event) {
//   event.preventDefault();
// }

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Current Inventory</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell><TextFields/></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
    </React.Fragment>
  );
}



// import { useEffect, useState} from 'react';
// import Typography from '@mui/material/Typography';
// import * as inventoryService from '../services/InventoryService';
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableRow,
//   } from '@mui/material';
  

//   const title={
//     color:'blue'
// }

// export default function Orders() {
//     const [inventory, setInventory]= useState([]);
   

//     useEffect(()=> {
//         inventoryService.getAllInventory()
//         .then(res => {
//             setInventory(res.data);
//         })
//     }, [])
  


//     return (
//         <div >
//             <Typography component="h1" variant="h3" style={title}>
//             <b>The Hope Center</b>
//             </Typography>
//             <Typography>Current Inventory</Typography>
//             <Table sx={{minWidth:700}}>
//                 <TableHead sx={{}}>
//                 <TableRow>
//                     <TableCell>
//                         Id
//                     </TableCell>                        
//                     <TableCell>
//                       Name
//                     </TableCell>
//                     <TableCell>
//                         Category
//                     </TableCell>
//                     <TableCell>
//                        Description
//                     </TableCell>
//                 </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {
//                         inventory.map((table)=> {
//                             return(
//                                 <TableRow
//                                     hover
//                                     key={table.id}
//                                 >
//                                     <TableCell>
//                                         {table.id}
//                                     </TableCell>
//                                     <TableCell>
//                                         {table.name}
//                                     </TableCell>
//                                     <TableCell>
//                                         {table.category}
//                                     </TableCell>
//                                     <TableCell>
//                                         {table.description}
//                                     </TableCell>
//                                 </TableRow>
//                             ) 
//                         })
//                     }
//                 </TableBody>
//             </Table>
//         </div>
//     )
// }