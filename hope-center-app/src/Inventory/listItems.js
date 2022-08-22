import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InventoryIcon from '@mui/icons-material/Inventory';
import HomeIcon from '@mui/icons-material/Home';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import RoomServiceIcon from '@mui/icons-material/RoomService';



export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <Link to="/donatehome">
        <HomeIcon style={{color: 'black'}}/>
        </Link>
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <InventoryIcon style={{color: 'black'}}/>
      </ListItemIcon>
      <ListItemText primary="Inventory" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Link to="/participantform">
        <RecordVoiceOverIcon  style={{color: 'black'}}/>
        </Link>
      </ListItemIcon>
      <ListItemText primary="Participant Request" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Link to="/donateform">
        <RoomServiceIcon  style={{color: 'black'}}/>
        </Link>
      </ListItemIcon>
      <ListItemText primary="Incoming Donations" />
    </ListItemButton>
    {/* <SearchBar /> */}
    
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
   
  </React.Fragment>
);