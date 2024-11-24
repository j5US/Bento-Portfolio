/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '15': 'repeat(15, 1fr)',
      },
      screens: {
        '2xl': '1537px',
        'lg': '1025px',
        'lgr': '1130px',
        'xs': '500px',
      },
    },
  },
  plugins: [],
}

