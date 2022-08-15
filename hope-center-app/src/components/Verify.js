import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const title={
    color:'blue',
    padding:'50px'
}

const field={
    width:'10px',
   
  }

const btn={
    marginTop:'15px'
}
export default function Verify() {
    return (
        <div>
        <Typography component="h1" variant="h3" style={title}>
            <b>The Hope Center</b>
         </Typography>
         <Typography component="h1" variant="h6" >
            Verification Code:
         </Typography>

        <Box
        component="form"
        sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField id="outlined-basic" variant="outlined" size="small" style={field}/>
        <TextField id="outlined-basic" variant="outlined" size="small" style={field}/>
        <TextField id="outlined-basic" variant="outlined" size="small" style={field}/>
        <TextField id="outlined-basic" variant="outlined" size="small" style={field}/>
        <TextField id="outlined-basic" variant="outlined" size="small" style={field}/>
        <TextField id="outlined-basic" variant="outlined" size="small" style={field}/>
        </Box>
        <TextField id="standard-basic" variant="standard" />
        <div></div>
        <Button variant="contained" style={btn}>
            Submit
        </Button>

        </div>

       
        
    )
}

