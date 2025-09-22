"use client";

import { Box, Container, Typography, Link, Stack } from "@mui/material";
import Image from "next/image";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "black", color: "white", py: 6 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 4,
            pb: 4,
            borderBottom: "1px solid #333",
          }}
        >
          <Box sx={{ minWidth: "200px" }}>
            <Typography variant="h6" gutterBottom sx={{ color: "#d4a373" }}>
              About Us
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="hover">
                Our Story
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Work With Us
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Press & Media
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Privacy & Security
              </Link>
            </Stack>
          </Box>

          <Box sx={{ minWidth: "200px" }}>
            <Typography variant="h6" gutterBottom sx={{ color: "#d4a373" }}>
              We Offer
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="hover">
                Trip Sponsorship
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Last Minutes Flights
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Best Deals
              </Link>
              <Link href="#" color="inherit" underline="hover">
                AI-Driven Search
              </Link>
            </Stack>
          </Box>

          <Box sx={{ minWidth: "200px" }}>
            <Typography variant="h6" gutterBottom sx={{ color: "#d4a373" }}>
              Activities
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="hover">
                Tour Leading
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Cruising & Sailing
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Camping
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Kayaking
              </Link>
            </Stack>
          </Box>

          <Box sx={{ minWidth: "200px" }}>
            <Typography variant="h6" gutterBottom sx={{ color: "#d4a373" }}>
              Service
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="hover">
                Report Error
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Ask Online
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Travel Insurance
              </Link>
            </Stack>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            py: 3,
            borderBottom: "1px solid #333",
          }}
        >
          <Stack direction="row" spacing={2}>
            <Image
              src="/footer/VisaCard.png"
              alt="Visa"
              width={50}
              height={30}
            />
            <Image src="/footer/Amex.png" alt="Amex" width={50} height={30} />
            <Image
              src="/footer/MasterCard.png"
              alt="Mastercard"
              width={50}
              height={30}
            />
            <Image
              src="/footer/Paypal.png"
              alt="Paypal"
              width={50}
              height={30}
            />
          </Stack>

          <Stack direction="row" spacing={2} mt={{ xs: 2, md: 0 }}>
            <Link href="https://facebook.com" target="_blank">
              <Image
                src="/footer/f.png"
                alt="Facebook"
                width={30}
                height={30}
              />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Image src="/footer/x.png" alt="Twitter" width={30} height={30} />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Image
                src="/footer/ins.png"
                alt="Instagram"
                width={30}
                height={30}
              />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Image
                src="/footer/lin.png"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </Link>
          </Stack>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 2,
            mt: 3,
          }}
        >
          <Typography variant="body2">
            © TheLuxedge | &quot;Seamless Journeys, Unrivalled Hotels
            Wisdom!&quot;
          </Typography>

          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            flexWrap="wrap"
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Image src="/footer/g.png" alt="Email" width={16} height={16} />
              <Typography variant="body2">Gmail@Gmail.Com</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Image
                src="/footer/lo.png"
                alt="Location"
                width={16}
                height={16}
              />
              <Typography variant="body2">123 Oxford Street, London</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Image src="/footer/ph.png" alt="Phone" width={16} height={16} />
              <Typography variant="body2">+44 20 7123 4567</Typography>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
