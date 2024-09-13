'use client';
import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Contact = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #ffffff, #b3d9ff)',
        padding: '4rem 0',
      }}
    >
      <Box
        sx={{
          background: 'linear-gradient(to top , #d0e6ff, #ffffff)',
          marginTop: '2rem',
          marginBottom: '2rem',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          maxWidth: '500px',
          margin: '0 auto',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
          Contact Me
        </Typography>
        {/* Add Netlify form attributes */}
        <Box
          component="form"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '100%', margin: '0 auto' }}
        >
          {/* Honeypot field for spam prevention */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <TextField label="Name" name="name" variant="outlined" fullWidth required />
          <TextField label="Email" name="email" variant="outlined" fullWidth required />
          <TextField label="Message" name="message" variant="outlined" multiline rows={4} fullWidth required />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              marginBottom: '1rem',
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

