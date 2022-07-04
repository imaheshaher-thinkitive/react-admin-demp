module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        bluegray_900: "#252733",
        gray_400: "#b5b7b9",
        bluegray_300_42: "#a3abb942",
        black_900: "#000000",
        gray_800: "#4a4a4a",
        red_A100: "#ff7777",
        gray_801: "#3b3b3b",
        deep_purple_400: "#694bdb",
        gray_200: "#ebebeb",
        white_A700: "#ffffff",
        gray_100: "#f5f5f5",
        teal_A400: "#2bebc8",
      },
      fontFamily: { mulish: "Mulish", inter: "Inter" },
      borderRadius: { radius8: "8px", radius54: "54px" },
      boxShadow: { bs: "0px 2px  2px 0px #a3abb942" },
      letterSpacing: { ls1: "1px" },
      opacity: { op7: 0.7 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
