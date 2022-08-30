import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import InventoryIcon from '@mui/icons-material/Inventory';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';


const tiers = [
  {
    title: 'Incoming Donations',
    image: require('../Images/incoming.jpg'),
    buttonText: <Link to='/donateform'><RoomServiceIcon sx={{ width:50, height: 50 }} /></Link>,
    buttonVariant: 'outlined',
  },
  {
    title: 'Inventory',
    image: require('../Images/incoming.jpg'),
    buttonText: <Link to='/inventory'><InventoryIcon sx={{ width:50, height: 50 }} /></Link>,
    buttonVariant: 'outlined',
  },
  {
    title: 'Participant Request',
    image: require('../Images/incoming.jpg'),
    buttonText: <Link to='/participantform'><RecordVoiceOverIcon sx={{ width:50, height: 50 }}/></Link>,
    buttonVariant: 'outlined',
  },
];


function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
    
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end" >
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
                 
                    
                 
                    
                 
                  
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
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

export default function Pricing() {
  return <PricingContent />;
}