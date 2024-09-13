// components/Experience.js
import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid, List, ListItem, ListItemIcon } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'; // For bullet points

const Experience = () => {
  const experiences = [
    {
      title: 'Front-End UI Developer, Corsphere (Co-op)',
      date: 'May 2024 - Aug 2024',
      description:
        'At Corsphere, I developed a secure authentication system for a Next.js app using React Hooks and Material-UI and created interactive data visualizations with React and Victory. I built a full-stack text processing service with a React front-end and Flask API, incorporating CORS and robust logging. I led geospatial data visualization development with React-Leaflet, optimized UI/UX with Material-UI and Tailwind CSS, and ensured quality through Agile practices and testing with Jest and Pytest.',
      skills: [
        'Authentication, Data Visualization',
        'Full-Stack Development with React and Flask',
        'Geospatial Visualization, UI/UX Optimization',
        'Agile Development, Testing with Jest and Pytest',
      ],
    },
    {
      title: 'Server, Sun Sushi',
      date: 'Mar 2023 - Present',
      description: 'Responsibilities:',
      skills: [
        'Excelled in providing exceptional guest assistance, actively listening to customer needs and promptly addressing any concerns, ensuring a satisfying dining experience.',
        'Promoted daily specials and recommended menu items with enthusiasm, contributing to increased customer satisfaction and sales.',
        'Upheld the highest standards of cleanliness and sanitation, ensuring a safe and inviting dining environment for guests.',
      ],
    },
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #ffffff, #b3d9ff)', // Gradient from white to blue for the whole background
        padding: '4rem 0', // Add padding around the section
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.9)',
      }}
    >
      <Container sx={{ marginTop: '2rem', marginBottom: '2rem' }}>
        {/* Grid for Experience Cards */}
        <Grid container spacing={4}>
          {experiences.map((experience, index) => (
            <Grid
              item
              xs={12}
              md={6}
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center', // Centers horizontally
                alignItems: 'center', // Centers vertically
              }}
            >
              <Card
                sx={{
                  background: 'linear-gradient(to bottom , #d0e6ff, #ffffff)', // Gradient from blue to white
                  borderRadius: '8px', // Keep rounded corners
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
                  display: 'flex', // Flex to allow dynamic height based on content
                  flexDirection: 'column', // Flex direction column for vertical stacking
                  width: '100%', // Make the card occupy full width
                  maxWidth: '100%', // Set max width for responsiveness
                  alignSelf: 'center', // Align the card in the center
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  {/* Title and Date */}
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {experience.title} ({experience.date})
                  </Typography>

                  {/* Description */}
                  {experience.description && experience.description !== 'Responsibilities:' && (
                    <Typography variant="body1" paragraph>
                      {experience.description}
                    </Typography>
                  )}

                  {/* Skills or Responsibilities */}
                  {experience.skills.length > 0 && (
                    <>
                      {/* Skills Learned or Responsibilities */}
                      {experience.title.includes('Corsphere') ? (
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                          Skills Learned:
                        </Typography>
                      ) : (
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                          {experience.description}
                        </Typography>
                      )}

                      {/* Display List as Bullet Points */}
                      <List sx={{ paddingLeft: '1rem', marginTop: '0rem' }}>
                        {experience.skills.map((skill, i) => (
                          <ListItem disableGutters key={i}>
                            <ListItemIcon sx={{ minWidth: 'auto', marginRight: '0.5rem' }}>
                              <FiberManualRecordIcon sx={{ fontSize: '0.6rem' }} />
                            </ListItemIcon>
                            <Typography variant="body2" sx={{ color: '#555' }}>
                              {skill}
                            </Typography>
                          </ListItem>
                        ))}
                      </List>
                    </>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience;
