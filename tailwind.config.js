module.exports = {

  purge: [],

  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      animation: {
        'spin-slow': 'spin 48s linear infinite',
        'spin-rectangle': 'spin 4s linear infinite',

      },
      fontFamily: {
         'pop': ['"poppins"'],
       },
      container: {
        width:{
          default:1440
        },
        center: true,
      },
      colors: {
        custom:{
          orange:"#FE8D7B",
          orangeLight:"",
          blue:"#55CCD4",
          pink:"#FE6786",
          green:"#C7DAC7",
          backXl:"#FBFBFB",
          backSm:"#F7F7F7",
        }
      },
      backgroundImage: theme => ({
        "contact":"url('./images/contact1.png')",
        })

     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }