import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  fontSizes: {
    "nav-link-desktop": "16px",
    "nav-link-mobile": "21px",
    "nav-button-desktop": "14px",
    "nav-button-mobile": "14px",
    "footer-link-desktop": "16px",
    "footer-link-mobile": "14px",
  },
  lineHeights: {
    "nav-link-desktop": "24px",
    "nav-link-mobile": "32px",
    "nav-button-desktop": "14px",
    "nav-button-mobile": "14px",
    "footer-link-desktop": "16px",
    "footer-link-mobile": "14px",
  },
  fontWeights: {
    "nav-link-desktop": 500,
    "nav-link-mobile": 400,
    "nav-button-desktop": 600,
    "nav-button-mobile": 600,
  },
  colors: {
    primary: "#1B3C46",
    secondary: "#FFBD00",
    black: "#0A0D25",
  },

  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
});

export default theme;
