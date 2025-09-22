"use client";

import { Box, Typography, TextField, Button, InputAdornment } from "@mui/material";
import Image from "next/image";

const SubscribeSection = () => {
    return (
        <Box
            sx={{
                bgcolor: "#fcd7a3",
                borderRadius: "12px",
                p: { xs: 3, md: 4 },
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                gap: 3,
            }}
        >

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Image
                    src="/Subscribe/icons.png"
                    alt="Deals Icon"
                    width={60}
                    height={60}
                />
                <Box>
                    <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, color: "black" }}
                    >
                        Be The First To Access Exclusive Deals
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#6b4f2f" }}>
                        Get The Finest Hotel Offers Delivered To Your Inbox
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <TextField
                    placeholder="john@gmail.com"
                    variant="outlined"
                    size="small"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Typography
                                    sx={{ color: "#8d5b29", fontSize: "0.85rem", mr: 1 }}
                                >
                                    Your email
                                </Typography>
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        bgcolor: "#fff",
                        borderRadius: "50px",
                        minWidth: { xs: "220px", md: "300px" },
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "50px",
                        },
                    }}
                />

                <Button
                    variant="contained"
                    sx={{
                        background: "linear-gradient(90deg, #b07d33, #8d5b29)",
                        borderRadius: "50px",
                        px: 3,
                        fontWeight: 600,
                        textTransform: "none",
                        "&:hover": {
                            background: "linear-gradient(90deg, #8d5b29, #b07d33)",
                        },
                    }}
                >
                    Subscribe Now »
                </Button>
            </Box>
        </Box>
    );
};

export default SubscribeSection;
