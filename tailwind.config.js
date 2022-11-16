/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#272727',
      secondary: '#2C2E2F',
      text: '#3DAEDE',
    },
    screens: {
      sm: '0px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    dropShadow: {
      '2xl': '0 0 35px rgba(61, 174, 222, 1)',
      xl: '0 0 10px rgba(255,255,255, .3)',
    },
  },
  plugins: [],
}
