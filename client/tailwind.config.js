/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Adjust the paths as needed
  theme: {
    extend: {
      colors: {
        // "accent":"#EDFFAB", 
        "main-color": "#075985", // sky-800
        "secondary-color": "#94A3B8",
        // "accent-color":"#EDFFAB", // lime green
        "accent-color":"#FFD700", 
        "lamp-gold": "#FFD700",     // The magical lamp's golden color
        "vest-purple": "#800080",   // Aladdin's royal purple vest
        "genie-blue": "#31C6E8",    // Genie's bright blue skin
        "genie-sash": "#FF2400",    // Genie's red sash
      },
    },
  },
  plugins: [],
};
