/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        booksifytheme: {
          primary: "#025AA5",

          secondary: "#FAB03C",
          accent: "#3A4256",

          neutral: "#3D4451",
          success: "#006400",
          // green

          info: "#FFBD86",
          // cherry

          error: "#FD4755",
          // Red 
          

          "base-100": "#FFFFFF",
        },
      },
    ],
  },

  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],
};
