import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';





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
            <TableCell>Category</TableCell>
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