/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  themes: [
    {
      booksifytheme: {
        primary: "#025AA5",

        secondary: "#F76E2E",

        accent: "#3A4256",

        neutral: "#3D4451",

        "base-100": "#FFFFFF",
      },
    },
  ],
  plugins: [require("daisyui")],
};
