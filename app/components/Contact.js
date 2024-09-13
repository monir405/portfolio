// components/Contact.js
import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Contact = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #ffffff, #b3d9ff)', // Gradient for the entire section background
        padding: '4rem 0', // Add padding around the section
      }}
    >
      {/* Form container with box shadow */}
      <Box 
        sx={{ 
          background: 'linear-gradient(to top , #d0e6ff, #ffffff)', 
          marginTop: '2rem', 
          marginBottom: '2rem', 
          borderRadius: '12px', // Rounded corners
          padding: '2rem', // Additional padding inside the form container
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Box shadow for the form container
          maxWidth: '500px', // Limit the max width of the form container
          margin: '0 auto', // Center align the form container
        }}
      >
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ textAlign: 'center' }} // Center the text
        >
          Contact Me
        </Typography>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '100%', margin: '0 auto' }}>
          <TextField label="Name" variant="outlined" fullWidth />
          <TextField label="Email" variant="outlined" fullWidth />
          <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
          <Button 
            variant="contained" 
            color="primary" 
            type="submit" 
            sx={{
              marginBottom: '1rem' // Add bottom margin to the button
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
