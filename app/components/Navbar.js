// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black', padding: '0.5rem 0' }}>
      <Toolbar sx={{ maxWidth: '100%', display: 'flex', justifyContent: 'space-between', padding: 0 }}>
        {/* Site Title */}
        <Typography
          variant="h6"
          sx={{ color: 'white', fontWeight: 'bold', ml: '1rem' }} // Margin-left to adjust the left padding
        >
          Sadia Binte Monir
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex' }}>
          {[
            { name: 'About', href: '#about' },
            { name: 'Qualifications', href: '#qualifications' },
            { name: 'Experience', href: '#experience' },
            { name: 'Projects', href: '#projects' },
            { name: 'Contact', href: '#contact' },
          ].map((item, index) => (
            <Link href={item.href} key={index} passHref>
              <Button
                sx={{
                  color: 'white',
                  marginLeft: '1rem', // Adds spacing between buttons
                  fontSize: '1rem',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    fontSize: '1.1rem',
                  },
                }}
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
