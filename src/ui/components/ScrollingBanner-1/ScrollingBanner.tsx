"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";

// Keyframes for infinite scrolling
const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const phrases = [
  ["Book", "Smart"],
  ["Stay", "Comfortable"],
  ["Best", "Deals"],
  ["Easy", "Booking"],
  ["24/7", "Support"],
  ["Trusted", "Hotels"],
  ["Travel", "Hassle-Free"],
];

const ScrollingBanner = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        bgcolor: "#fdd9a0",
        border: "1px solid #d4a373",
        py: 2,
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          animation: `${scroll} 20s linear infinite`,
          "&:hover": {
            animationPlayState: "paused", // pause on hover
          },
        }}
      >
        {/* Render text twice for seamless loop */}
        {[...Array(2)].map((_, idx) => (
          <Box
            key={idx}
            sx={{
              display: "flex",
              gap: 6,
              pr: idx === 1 ? "80px" : 0, // add a little gap before repeat
            }}
          >
            {phrases.map(([normal, highlight], i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "var(--font-dmSans)",
                    fontSize: "35px",
                    lineHeight: "45px",
                    letterSpacing: "-0.03em",
                    color: "#5a2d0c",
                    fontWeight: 400,
                  }}
                >
                  {normal}{" "}
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "40px",
                      lineHeight: "55px",
                      letterSpacing: "-0.03em",
                      fontWeight: 600,
                      color: "#973e15",
                    }}
                  >
                    {highlight}
                  </Typography>
                </Typography>

                {/* Star separator */}
                {i < phrases.length - 1 && (
                  <Typography
                    component="span"
                    sx={{
                      mx: 2,
                      fontFamily: "var(--font-playfair)",
                      fontSize: "40px",
                      lineHeight: "55px",
                      letterSpacing: "-0.03em",
                      fontWeight: 600,
                      color: "#000", // black star
                    }}
                  >
                    ✦
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ScrollingBanner;

