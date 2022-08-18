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

export const InventoryTable = () => {
    const [inventory, setInventory]= useState([]);
   

    useEffect(()=> {
        inventoryService.getAllInventory()
        .then(res => {
            setInventory(res.data);
        })
    }, [])
  


    return (
        <div >
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
                        Category
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
                                    <TableCell>
                                        {table.description}
                                    </TableCell>
                                </TableRow>
                            ) 
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}