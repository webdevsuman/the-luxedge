
"use client";

import { Box, Container, Typography, Card, CardMedia, CardContent } from "@mui/material";

const destinations = [
  { name: "Kolkata", image: "/destination/img-1.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a velit nibh." },
  { name: "Darjeeling City", image: "/destination/img-2.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a velit nibh." },
  { name: "Hyderabad", image: "/destination/img-3.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a velit nibh." },
  { name: "Haridwar", image: "/destination/img-4.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a velit nibh." },
  { name: "Chennai", image: "/destination/img-5.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a velit nibh." },
  { name: "Mumbai", image: "/destination/img-6.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a velit nibh." },
  { name: "Bhubaneswar", image: "/destination/img-7.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a velit nibh." },
  { name: "Bengaluru", image: "/destination/img-8.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a velit nibh." },
  { name: "Rajasthan", image: "/destination/img-9.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a velit nibh." },
];

export default function DestinationsPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
     
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" fontWeight="bold">
          Popular{" "}
          <span style={{ fontStyle: "italic", color: "#C46F2E" }}>
            Destination City
          </span>
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 2, maxWidth: 600, color: "text.secondary" }}
        >
          Discover the world’s most popular destinations, carefully selected for
          their culture, charm, and experiences. From bustling metropolises to
          serene escapes, each location promises something unique.
        </Typography>
      </Box>

     
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "space-between",
        }}
      >
        {destinations.map((city, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 1 calc(33.333% - 24px)", 
              minWidth: "280px", 
              maxWidth: "400px",
            }}
          >
            <Card
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                position: "relative",
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={city.image}
                alt={city.name}
                sx={{ filter: "brightness(0.7)" }}
              />
              <CardContent
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  color: "#fff",
                  background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.7))",
                  width: "100%",
                  p: 2,
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {city.name}
                </Typography>
                <Typography variant="body2">{city.desc}</Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
