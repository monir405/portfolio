// components/Qualifications.js
import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import Education from './Education';
import Certifications from './Certifications';
import Skills from './Skills';

const Qualifications = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #ffffff, #b3d9ff)', // Gradient from white to blue for the whole background
        padding: '4rem 0', // Add padding around the section
      }}
    >
      <Container sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
        {/* Grid for Qualification Cards */}
        <Grid
          container
          spacing={4}
          sx={{
            display: 'flex', // Enables flexbox
            justifyContent: 'center', // Centers horizontally
            alignItems: 'center', // Centers vertically if needed
          }}
        >
          {/* Education Section */}
          <Grid item xs={12} md={4}>
            <Education />
          </Grid>

          {/* Certifications Section */}
          <Grid item xs={12} md={4}>
            <Certifications />
          </Grid>

          {/* Skills Section */}
          <Grid item xs={12} md={4}>
            <Skills />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Qualifications;
