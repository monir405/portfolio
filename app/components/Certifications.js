// components/Certifications.js
import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';

const Certifications = () => {
  return (
    <Card sx={{     background: 'linear-gradient(to bottom , #d0e6ff, #ffffff)', // Gradient from blue to white
        borderRadius: '8px', padding: '1rem',          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
      }}>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          Certifications
        </Typography>
        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
          <VerifiedIcon sx={{ marginRight: '0.5rem' }} /> Data Analysis With Python freeCodeCamp
        </Typography>
        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
          <VerifiedIcon sx={{ marginRight: '0.5rem' }} /> Responsive Web Design by freeCodeCamp
        </Typography>
        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
          <VerifiedIcon sx={{ marginRight: '0.5rem' }} /> Scientific Computing With Python by freeCodeCamp
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Certifications;
