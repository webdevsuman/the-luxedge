import { ThemeOptions } from "@mui/material/styles";
import { MuiPalette } from "./palette";

export const MuiThemeOptions: ThemeOptions = {
  palette: MuiPalette("light"),
  typography: {
    fontFamily: '"Playfair Display","DM Sans", "Arial",serif, sans-serif',
  },
};
