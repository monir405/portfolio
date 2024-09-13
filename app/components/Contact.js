"use client";
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
      } else {
        alert('Error sending message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Box sx={{ background: 'linear-gradient(to bottom, #ffffff, #b3d9ff)', padding: '4rem 0' }}>
      <Box sx={{ background: 'linear-gradient(to top , #d0e6ff, #ffffff)', marginTop: '2rem', marginBottom: '2rem', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', maxWidth: '500px', margin: '0 auto' }}>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>Contact Me</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '100%', margin: '0 auto' }}>
          <TextField label="Name" name="name" value={formData.name} onChange={handleChange} variant="outlined" fullWidth />
          <TextField label="Email" name="email" value={formData.email} onChange={handleChange} variant="outlined" fullWidth />
          <TextField label="Message" name="message" value={formData.message} onChange={handleChange} variant="outlined" multiline rows={4} fullWidth />
          <Button variant="contained" color="primary" type="submit" sx={{ marginBottom: '1rem' }}>Send</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
