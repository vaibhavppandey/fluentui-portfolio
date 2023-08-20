/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '670px',
      md: '1024px',
      lg: '1280px',
      xl: '1460px',
      '2xl': '1680px',
    },
    extend: {},
  },
  plugins: [],
};
