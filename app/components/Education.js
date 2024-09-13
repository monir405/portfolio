// components/Education.js
import React from 'react';
import { Typography, Card, CardContent, Box, List, ListItem, ListItemIcon } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'; // For bullet points

const Education = () => {
  return (
    <Card sx={{     background: 'linear-gradient(to bottom , #d0e6ff, #ffffff)', borderRadius: '8px', padding: '1rem' ,          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
    }}>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          Education
        </Typography>

        {/* Main Education Title and Institution */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' ,}}>
          <SchoolIcon sx={{ marginRight: '0.5rem' }} />
          <Typography variant="body1">
            Software Development Co-op at College Of North Atlantic, 09/2023 - Present
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '1rem', color: '#555' }}>
          
        </Typography>
        </Box>

        {/* Dates */}
        

        {/* Relevant Coursework Section */}
        <Typography variant="body2" sx={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>
          Relevant Coursework:
        </Typography>

        {/* List of Bullet Points for Coursework */}
        <List sx={{ paddingLeft: '1rem', marginTop: '0rem' }}>
          <ListItem disableGutters>
            <ListItemIcon sx={{ minWidth: 'auto', marginRight: '0.5rem' }}>
              <FiberManualRecordIcon sx={{ fontSize: '0.6rem' }} />
            </ListItemIcon>
            <Typography variant="body2" sx={{ color: '#555' }}>
              Database Management Systems (focused on MySQL)
            </Typography>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon sx={{ minWidth: 'auto', marginRight: '0.5rem' }}>
              <FiberManualRecordIcon sx={{ fontSize: '0.6rem' }} />
            </ListItemIcon>
            <Typography variant="body2" sx={{ color: '#555' }}>
              Operating Systems (with an emphasis on Linux)
            </Typography>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon sx={{ minWidth: 'auto', marginRight: '0.5rem' }}>
              <FiberManualRecordIcon sx={{ fontSize: '0.6rem' }} />
            </ListItemIcon>
            <Typography variant="body2" sx={{ color: '#555' }}>
              OOP with Java, Python, JavaScript, HTML5/CSS
            </Typography>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default Education;