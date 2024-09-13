'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black', padding: '0.5rem 0' }}>
      <Toolbar sx={{ maxWidth: '100%', display: 'flex', justifyContent: 'space-between', padding: 0 }}>
        {/* Site Title */}
        <Typography
          variant="h6"
          sx={{ color: 'white', fontWeight: 'bold', ml: '1rem' }}
        >
          Sadia Binte Monir
        </Typography>

        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}> {/* Hidden on small screens, visible on medium and larger */}
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
                  marginLeft: '1rem',
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

        {/* Mobile Navigation Icon */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}> {/* Visible on small screens, hidden on medium and larger */}
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ mt: '2rem' }}
          >
            {[
              { name: 'About', href: '#about' },
              { name: 'Qualifications', href: '#qualifications' },
              { name: 'Experience', href: '#experience' },
              { name: 'Projects', href: '#projects' },
              { name: 'Contact', href: '#contact' },
            ].map((item, index) => (
              <MenuItem key={index} onClick={handleMenuClose}>
                <Link href={item.href} passHref>
                  <Button
                    sx={{
                      color: 'black',
                      textTransform: 'none',
                      fontSize: '1rem',
                    }}
                  >
                    {item.name}
                  </Button>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
