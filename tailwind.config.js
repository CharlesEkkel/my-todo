const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: colors.transparent,
      danger: "E25858",
      grey100: "#F2F2F2",
      grey200: "#D9D9D9",
      grey300: "#808080",
      grey400: "#333333",
      grey500: "#262626",
      grey600: "#1A1A1A",
      grey700: "#0D0D0D",
      purple: {
        DEFAULT: "#8284FA",
        dark: "#5E60CE",
      },
      blue: {
        DEFAULT: "#4EA8DE",
        dark: "#1E7F9F",
      },
    },
  },
  plugins: [],
};
