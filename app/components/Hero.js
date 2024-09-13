// components/Hero.js
"use client";
import React from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import { LinkedIn, GitHub, Email, PictureAsPdf } from '@mui/icons-material';

const About = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', position: 'relative' }}>
      {/* Left Side - Solid Blue Background */}
      <Box
        sx={{
          width: '30%',
          backgroundColor: '#cce6ff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem', // Reduced padding
          position: 'relative',
        }}
      >
        {/* Profile Card */}
        <Box
          sx={{
            width: '80%',
            padding: '1.5rem', // Reduced padding inside the card
            backgroundColor: '#e6f2ff',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
            textAlign: 'center',
            position: 'absolute',
            right: '-10%',
            transform: 'translateX(10%)',
          }}
        >
          <Box
            component="img"
            src="/1665593066081.jpg"
            alt="Your Description"
            sx={{
              width: '100%',
              borderRadius: '50%',
              marginBottom: '1rem',
            }}
          />
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Sadia Binte Monir
          </Typography>
          <Typography variant="body2" sx={{ color: '#555' }}>
            Software Developer
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', gap: '0.5rem' }}>
            <IconButton href="https://www.linkedin.com/in/sadia-binte-monir/" target="_blank" sx={{ color: '#0e76a8' }}>
              <LinkedIn />
            </IconButton>
            <IconButton href="https://github.com/monir405" target="_blank" sx={{ color: '#333' }}>
              <GitHub />
            </IconButton>
            <IconButton href="mailto:sbmonir@mun.ca" target="_blank" sx={{ color: '#d44638' }}>
              <Email />
            </IconButton>
            <IconButton href="/draftResume.pdf" target="_blank" sx={{ color: '#ff0000' }}>
              <PictureAsPdf />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Right Side - White Background */}
      <Box
        sx={{
          width: '70%',
          display: 'flex',
          alignItems: 'center',
          padding: '4rem 6rem 4rem 8rem',
          position: 'relative',
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
            Hello
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', lineHeight: '1.6', mb: 3 }}>
            I am a passionate and detail-oriented software developer with a strong foundation in computer science and hands-on experience in designing, implementing, testing, and maintaining software applications. My enthusiasm for solving complex problems drives my commitment to staying current with emerging technologies and industry trends.
          </Typography>

          {/* Enhanced Animation Area */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', position: 'relative' }}>
            {/* Rotating 3D LinkedIn Icon */}
            <IconButton
              href="https://www.linkedin.com/in/sadia-binte-monir/"
              target="_blank"
              sx={{
                color: '#0e76a8',
                fontSize: '2rem',
                animation: 'rotate3D 4s infinite linear', // 3D rotation animation
                position: 'relative',
                zIndex: 1,
                '&:hover::after': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0, 118, 168, 0.1)',
                  animation: 'confettiBurst 0.6s forwards', // Confetti animation
                },
              }}
            >
              <LinkedIn />
            </IconButton>

            {/* Text Fade In and Out Animation */}
            <Typography
              variant="h4" // Increased font size
              sx={{
                color: '#0e76a8',
                animation: 'fadeInOut 3s infinite', // Fade in and out animation
                fontWeight: 'bold', // Make text bold
              }}
            >
              Connect with me on LinkedIn!
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* CSS for Animations */}
      <style jsx global>{`
        @keyframes rotate3D {
          0% {
            transform: rotateY(0);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes confettiBurst {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </Box>
  );
};

export default About;
