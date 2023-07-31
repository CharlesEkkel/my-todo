const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: colors.transparent,
      active: colors.violet[500],
      focused: colors.violet[200],
      card: colors.sky[50],
      button: colors.sky[50],
      app: colors.sky[50],
    },
  },
  plugins: [],
};
