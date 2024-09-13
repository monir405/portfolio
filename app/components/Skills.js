// components/Skills.js
import React from 'react';
import { Typography, Card, CardContent, Box } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';

const Skills = () => {
  return (
    <Card sx={{ background: 'linear-gradient(to bottom , #d0e6ff, #ffffff)'
        , borderRadius: '8px', padding: '1rem' ,          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
      }}>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          Skills
        </Typography>
        {/* Skill Items */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
          <BuildIcon sx={{ marginRight: '0.5rem' }} />
          <Typography variant="body1" component="div">
            <b>Frontend Development:</b>
            <Typography variant="body1" component="span" sx={{ marginLeft: '0.5rem' }}>
              React.js, Next.js, JavaScript, HTML5, CSS, Material UI
            </Typography>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
          <BuildIcon sx={{ marginRight: '0.5rem' }} />
          <Typography variant="body1" component="div">
            <b>Backend Development:</b>
            <Typography variant="body1" component="span" sx={{ marginLeft: '0.5rem' }}>
              Python, C/C++, Java, MySQL
            </Typography>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
          <BuildIcon sx={{ marginRight: '0.5rem' }} />
          <Typography variant="body1" component="div">
            <b>Tools and Platforms:</b>
            <Typography variant="body1" component="span" sx={{ marginLeft: '0.5rem' }}>
              Github, Windows, Linux, Microsoft Office Suite
            </Typography>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Skills;
