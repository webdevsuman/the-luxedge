import { PaletteMode, PaletteOptions } from "@mui/material";

export const MuiPalette = (mode: PaletteMode): PaletteOptions => {
  return {
    mode,
    primary: {
      main: "#B3843F",
      contrastText: "#FFFFFF",
    },
  };
};
