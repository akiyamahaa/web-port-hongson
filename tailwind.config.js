/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#53CB17",
          50: '#F4FEEB',
          100: '#DFFCCB',
          200:'#C0F99D'
        },
        background: '#FCFCFC',
        grayNoob: '#292D32'
      },
      boxShadow: {
        'button': '0px 20px 35px 0px #0000000D',
      },
    },
  },
  plugins: [],
}

