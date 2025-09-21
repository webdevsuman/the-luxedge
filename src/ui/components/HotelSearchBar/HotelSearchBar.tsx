"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, MenuItem } from "@mui/material";

const HotelSearchBar = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      destination: "",
      checkIn: "",
      checkOut: "",
      adults: 1,
      children: 0,
      rooms: 1,
    },
  });

  const onSubmit = (data:object) => {
    console.log("Search Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-4 flex gap-5 mt-10 items-center"
    >
      {/* Destination */}
      <Controller
        name="destination"
        control={control}
        render={({ field }) => (
          <TextField {...field} label="Where are you going?" fullWidth />
        )}
      />

      {/* Check-in Date */}
      <Controller
        name="checkIn"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Check-in"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        )}
      />

      {/* Check-out Date */}
      <Controller
        name="checkOut"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Check-out"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        )}
      />

      {/* Adults */}
      <Controller
        name="adults"
        control={control}
        render={({ field }) => (
          <TextField {...field} select label="Adults" fullWidth>
            {[...Array(10).keys()].map((num) => (
              <MenuItem key={num + 1} value={num + 1}>
                {num + 1}
              </MenuItem>
            ))}
          </TextField>
        )}
      />

      {/* Children */}
      <Controller
        name="children"
        control={control}
        render={({ field }) => (
          <TextField {...field} select label="Children" fullWidth>
            {[...Array(6).keys()].map((num) => (
              <MenuItem key={num} value={num}>
                {num}
              </MenuItem>
            ))}
          </TextField>
        )}
      />

      {/* Rooms */}
      <Controller
        name="rooms"
        control={control}
        render={({ field }) => (
          <TextField {...field} select label="Rooms" fullWidth>
            {[...Array(5).keys()].map((num) => (
              <MenuItem key={num + 1} value={num + 1}>
                {num + 1}
              </MenuItem>
            ))}
          </TextField>
        )}
      />

      {/* Search Button */}
      <div className="md:col-span-6 flex justify-center mt-4">
        <Button
          type="submit"
          variant="contained"
          className="rounded-xl px-6 py-2 !bg-[#B3843F]"
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default HotelSearchBar;
