import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import Pricing from './InventoryCardsNew';

const sections = [
  { title: 'Services', url: '#' },
  { title: 'How Can You Help', url: '#' },
  { title: 'Send A Donation', url: '/moneyform' },
  { title: 'Become A Volunteer', url: '#' },
  { title: 'Donate Clothing', url: '/donateform' },
  { title: 'Other Donations', url: '#' },
];

const mainFeaturedPost = {
  title: '',
  description:
   "",


  // image: require('/Dev/The-Hope-Center/hope-center-app/src/HCTitle.png'),


  image: require('../Images/HCTitle.png'),

  imageText: 'main image description',
  linkText: '',
};


const theme = createTheme({
    typography:{
        allVariants: {
            fontFamily: 'serif',
           
        }
    }
  });



export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="NCC Hope Center" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          
          <Pricing />

          <Grid container spacing={5} sx={{ mt: 3 }}>
            {/* <Sidebar
              social={sidebar.social}
            /> */}
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}