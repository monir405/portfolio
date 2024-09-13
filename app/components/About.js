"use client";
import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import { LinkedIn, GitHub, Email, PictureAsPdf, ArrowRightAlt } from "@mui/icons-material";

const About = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", position: "relative" }}>
      {/* Left Side - Solid Blue Background */}
      <Box
        sx={{
          width: { xs: "100%", md: "30%" }, // Full width on small screens
          backgroundColor: "#b3d9ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          position: "relative",
        }}
      >
        {/* Profile Card */}
        <Box
          sx={{
            width: "80%",
            padding: "1.5rem",
            backgroundColor: "#e6f2ff",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
            textAlign: "center",
            position: "absolute",
            right: { xs: "0%", md: "-10%" },
            transform: { xs: "none", md: "translateX(10%)" },
          }}
        >
          <Box
            component="img"
            src="/picture.jpg"
            alt="Your Description"
            sx={{
              width: "100%",
              borderRadius: "50%",
              marginBottom: "1rem",
            }}
          />
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Sadia Binte Monir
          </Typography>
          <Typography variant="body2" sx={{ color: "#555" }}>
            Software Developer
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
              gap: "0.5rem",
            }}
          >
            <IconButton
              href="https://www.linkedin.com/in/sadia-binte-monir/"
              target="_blank"
              sx={{ color: "#0e76a8" }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://github.com/monir405"
              target="_blank"
              sx={{ color: "#333" }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              href="mailto:sbmonir@mun.ca"
              target="_blank"
              sx={{ color: "#d44638" }}
            >
              <Email />
            </IconButton>
            <IconButton
              href="/ResumeFall2024.pdf"
              target="_blank"
              sx={{ color: "#ff0000" }}
            >
              <PictureAsPdf />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Right Side - White Background */}
      <Box
        sx={{
          width: { xs: "100%", md: "70%" }, // Full width on small screens
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: "2rem 1rem", md: "4rem 6rem 4rem 8rem" }, // Adjust padding on small screens
          position: "relative",
          flexDirection: { xs: "column", md: "row" }, // Stack items on small screens
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2, textAlign: "center" }}>
            Hello
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#666", lineHeight: "1.6", mb: 3, textAlign: "center" }}
          >
            I am a passionate and detail-oriented software developer with a
            strong foundation in computer science and hands-on experience in
            designing, implementing, testing, and maintaining software
            applications. My enthusiasm for solving complex problems drives my
            commitment to staying current with emerging technologies and
            industry trends.
          </Typography>

          {/* Journey and Timeline Container with Floating Effect */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // Stack items on small screens
              backgroundColor: "#e6f2ff",
              padding: "2rem",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              position: "relative",
              animation: "float 3s ease-in-out infinite", // Floating animation
            }}
          >
            {/* Left Side - "My Journey" */}
            <Box sx={{ flex: 1, paddingRight: "2rem", display: 'flex', alignItems: 'flex-start', marginTop: '1.8rem' }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "black", display: "flex", alignItems: "center", mb: 2 }}
              >
                My Journey <ArrowRightAlt sx={{ fontSize: "2rem", color: "#0e76a8", ml: 1 }} />
              </Typography>
            </Box>

            {/* Right Side - Animated Timeline */}
            <Box sx={{ flex: 3, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {/* Timeline Container */}
              <Box sx={{ position: "relative", marginLeft: "1rem" }}>
                {/* Dot 1 */}
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    className="timeline-dot"
                    sx={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#0e76a8",
                      marginRight: "1rem",
                      animation: "fadeInOutTimeline 6s infinite",
                      opacity: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      color: "black",
                      animation: "fadeInOutTimeline 6s infinite",
                      opacity: 0,
                    }}
                  >
                    Started Software Development Co-op at CNA (September 2023)
                  </Typography>
                </Box>

                {/* Line 1 */}
                <Box
                  className="timeline-line"
                  sx={{
                    width: "2px",
                    height: "30px",
                    backgroundColor: "#0e76a8",
                    marginLeft: "4px",
                    animation: "fadeInOutTimeline 6s infinite 1s",
                    opacity: 0,
                  }}
                />

                {/* Dot 2 */}
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    className="timeline-dot"
                    sx={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#0e76a8",
                      marginRight: "1rem",
                      animation: "fadeInOutTimeline 6s infinite 2s",
                      opacity: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      color: "black",
                      animation: "fadeInOutTimeline 6s infinite 2s",
                      opacity: 0,
                    }}
                  >
                    Work Term I at Corsphere as Front End UI Developer (May 2024 - August2024)
                  </Typography>
                </Box>

                {/* Line 2 */}
                <Box
                  className="timeline-line"
                  sx={{
                    width: "2px",
                    height: "30px",
                    backgroundColor: "#0e76a8",
                    marginLeft: "4px",
                    animation: "fadeInOutTimeline 6s infinite 3s",
                    opacity: 0,
                  }}
                />

                {/* Dot 3 */}
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    className="timeline-dot"
                    sx={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#0e76a8",
                      marginRight: "1rem",
                      animation: "fadeInOutTimeline 6s infinite 4s",
                      opacity: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      color: "black",
                      animation: "fadeInOutTimeline 6s infinite 4s",
                      opacity: 0,
                    }}
                  >
                    Front End UI Developer (Part-time) at Corsphere (September 2024 - Present)
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* CSS for Animations */}
      <style jsx global>{`
        @keyframes fadeInOutTimeline {
          0% {
            opacity: 0;
          }
          10%,
          40% {
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        /* Floating animation for the journey box */
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </Box>
  );
};

export default About;
