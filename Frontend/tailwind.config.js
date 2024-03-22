/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
      'HomeBg': "linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)), url('Images/Bg.jpg')",
   },
   keyframes: {
    wiggle: {
      '0%': { top: '1600px' },
      '100%': { top: '1700px'},
    }
  },
  animation: {
    wiggle: 'wiggle 1s ease-in-out',
  },
    screens: {
      'Login': '1700px',
      'XR':'414px',
      'SE':'375px',
      'add':'612px',
      '2000':'2000px',
      '1500':'1500px',
      '1576':'1576px',
      '2200':'2200px'
      },
      minHeight:{
        'loginh':'900px'
      },
      maxHeight:{
        "1000":"1000px"
      },
      colors:{
        'navbarcol':'rgb(0, 124, 115)'
      },
      width:{
        '15':'60px',
        '445':'445px',
        '650':'650px',
        '1500':'1500px'
      },
      height:{
        '750':'750px'
      },
      borderWidth: {
        "6":"6px"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
