import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InventoryIcon from '@mui/icons-material/Inventory';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import {
  Menu,
  MenuItem,
  styled,
} from "@mui/material";




const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));



const appbar={
    backgroundColor:'blue'
}

const title={
    marginRight:'60px'
}

const header={
  color:'black',
  marginRight:'-10rem',
  marginTop:'150px'
}
const tiers = [
  {
    title: '',
    price: '',
    description: [
      <InventoryIcon sx={{ width:200, height: 150 }} />
    ],
    send: <Link to='/inventory'><b>Inventory</b></Link>,
    buttonVariant: 'outlined',
  },
  {
    title: '',
    subheader: '',
    price: '',
    description: [
      <RoomServiceIcon sx={{ width:200, height: 150 }} />
    ],
    send: <Link to='/donateform'><b>Incoming Donations</b></Link>,
    buttonVariant: 'outlined',
  },
  {
    title: '',
    price: '',
    description: [
      <RecordVoiceOverIcon sx={{ width:200, height: 150 }}/>
    ],
    send: <Link to='/participantform'><b>Participant Request</b></Link>,
    buttonVariant: 'outlined',
  },
];

function DonorContent() {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        style={appbar}
        position="static"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography style={title} variant="h6" color="inherit" noWrap sx={{ flexGrow: 1,  position:'relative',left:"-20rem"}}>
            New Castle County Hope Center, Inc.
          </Typography>
          <nav>
            <Stack direction="row" spacing={2}>
                <SearchIcon sx={{ width:28, height: 44 }}/>
                <NotificationsIcon sx={{ width:28, height: 44 }}/>
            

                <Avatar
            sx={{ width: 30, height: 30 }}
            onClick={(e) => setOpen(true)}
          />
       
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
          >D</Avatar>
          <Typography variant="span">Dre</Typography>
        </UserBox>
     
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {/* <MenuItem>Profile</MenuItem> */}
        <MenuItem>Settings</MenuItem>
        <Link to="/">
        <MenuItem>Logout</MenuItem>
        </Link>
      </Menu>

            </Stack>
          </nav>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          // color="text.primary"
          style={header}
          gutterBottom
        >
          <b>Inventory Management System</b>
        </Typography>
        {/* <Typography variant="h6" align="left" color="text.secondary" component="p">
          What would you like to do:
        </Typography> */}
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      {tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.send}
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default function DonorHome() {
  return <DonorContent />;
}