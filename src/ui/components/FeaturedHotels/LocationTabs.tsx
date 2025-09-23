"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import HotelCard from "../HotelCard/HotelCard";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function LocationTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{ borderBottom: 1, borderColor: "divider" }}
        className="flex items-center justify-between"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab sx={{ fontWeight: "bold" }} label="Kolkata" {...a11yProps(0)} />
          <Tab
            sx={{ fontWeight: "bold" }}
            label="New Delhi & NCR"
            {...a11yProps(1)}
          />
          <Tab sx={{ fontWeight: "bold" }} label="Mumbai" {...a11yProps(2)} />
          <Tab
            sx={{ fontWeight: "bold" }}
            label="Bangalore"
            {...a11yProps(3)}
          />
        </Tabs>
        <Typography color="primary" sx={{ fontWeight: "bold" }}>
          See more(Kolkata) Hotels{" "}
          <span>
            <ArrowOutwardIcon />
          </span>
        </Typography>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <HotelCard />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Four
      </CustomTabPanel>
    </Box>
  );
}
