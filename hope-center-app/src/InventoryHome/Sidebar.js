import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Sidebar(props) {
  const {  social } = props;

  return (
    <Grid item xs={12} md={4} marginLeft="55rem">

      <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
        Partners
      </Typography>
      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          to="/"
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  description: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Sidebar;