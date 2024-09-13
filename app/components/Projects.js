"use client";

import React, { useState } from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const Projects = () => {
  const projects = [
    {
      title: "Personal Projects",
      videoSrc: "/Multiplayer.mp4",
        description: "Developed a multiplayer puzzle game platform with five distinct games (Tic Tac Toe, 2048, 4 in a Row, Nine Men's Morris, Chess) using React and Next.js for the front-end framework\
                      Implemented game state management with React hooks and JavaScript, including timebound moves, turn-based mechanics, winner detection, features like move history tracking,\
                      game pause/resume, and game-over detection and real-time state updates. Utilized Material-UI for dynamic UI components, ensuring a responsive design and consistent user experience.\
                      Incorporated game-specific logic and interactivity for each game, with Chess logic utilizing the Chess.js library. Deployed and tested on modern browsers, focusing on performance and user engagement.",
                        },
    {
      title: "Personal Projects",
      videoSrc: "/userlogin.mp4",
      description: "Developed a secure authentication system for a Next.js application using React Hooks (useState, useEffect) and Material-UI. Managed user sessions with Session Storage for persistent authentication across reloads.\
                    Implemented local account storage with Local Storage, preventing duplicate account creation by validating credentials during signup and displaying \"Invalid credentials\" for security.\
                    Used Next.js Router (useRouter) for dynamic route management, enforcing access controls and enhancing user flow. Created dynamic login, dashboard, and welcome pages with state-driven content for a personalized user experience.",
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevious = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #ffffff, #b3d9ff)',
        padding: '4rem 0',
      }}
    >
      <Container
        sx={{
          marginTop: '4rem',
          marginBottom: '4rem',
          padding: '2rem',
          background: 'linear-gradient(to top , #b3d9ff, #ffffff)',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          {projects[currentProjectIndex].title}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '2rem',
          }}
        >
          <Box
            component="video"
            src={projects[currentProjectIndex].videoSrc}
            controls
            autoPlay
            loop
            muted
            sx={{
              width: '80%',
              borderRadius: '12px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              marginBottom: '1rem',
            }}
          />

          <Typography variant="body1" sx={{ color: '#555', maxWidth: '80%', marginTop: '1rem', lineHeight: '1.6' }}>
            {projects[currentProjectIndex].description}
          </Typography>
        </Box>

        {/* Carousel Controls */}
        <Button
          onClick={handlePrevious}
          sx={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: '#d0e6ff',
            padding: '0.5rem 1rem',
            border: 'none',
            cursor: 'pointer',
            zIndex: 10,
            '&:hover': { backgroundColor: '#c0d4ee' },
          }}
        >
          ⬅️
        </Button>
        <Button
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: '#d0e6ff',
            padding: '0.5rem 1rem',
            border: 'none',
            cursor: 'pointer',
            zIndex: 10,
            '&:hover': { backgroundColor: '#c0d4ee' },
          }}
        >
          ➡️
        </Button>
      </Container>
    </Box>
  );
};

export default Projects;
