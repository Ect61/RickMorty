// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'gray-600': '#2D2D2D',
        'gray-800': '#282a31',
        'green-500': '#24D330',
        'red': '#ff0000',
        'white': '#ffffff',

      },
      spacing: {

      },
      borderRadius: {

      },
    },
  },
  plugins: [],
};
