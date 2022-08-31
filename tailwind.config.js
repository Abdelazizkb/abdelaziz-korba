module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        '128': '28rem',
        '124': '26rem',
        '68': '17rem',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'spin-rectangle': 'spin 7s linear infinite',

      },
      borderWidth:{
        1:"1px"
      },
      colors: {
        primary: "#FE8D7B",
        orange : "",
        cover:"#FAFBFB",
      },
      backgroundImage: {
        Hero: "url('assets/Hero.png')",
        skill: "url('assets/skill-border.svg')",
      },
    },
  },
  plugins: [],
};
