import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const field={
    margin:'auto',
    padding:'10px'
}

const currencies = [

  {
    value: '',
    label: 'Product/Item',
  },
  {
    value: '',
    label: 'Monetary',
  }
];

export default function TextFields() {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      style={field}
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Type of Donation"
          value={currency}
          onChange={handleChange}
          
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
      </div>
    </Box>
  );
}
