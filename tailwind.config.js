/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-theme="dracula"]'],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#dbb06b",
          secondary: "#77a9dd",
          accent: "#cbc4ff",
          neutral: "#212028",
          "base-100": "#ECF0F4",
          info: "#68D8EE",
          success: "#22BF6B",
          warning: "#F7C736",
          error: "#E1374B",
        },
        
      },
      "dracula",
    ],
  },
  plugins: [require("daisyui")],
};
