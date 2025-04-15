/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('/img/ihs.jpg')",
        'train1': "url('/img/stock.jpg')",
        'smile': "url('/img/smile.jpg')",
        'chat': "url('/img/chat.jpg')",
        'shade': "url('/img/shade.jpg')",
        'zac3': "url('/img/zac3.jpg')",
        'individual': "url('/img/solderTech.jpeg')",
        'corperate': "url('/img/training.jpg')",
      },
      fontFamily:{
        bodyFont:["Poppins", "sans-serif"],
        titleFont:["Montserrat", "sans-serif"],
      },
      colors:{
        bodyColor: "#4468A6",
        bodyColor2: "#6E94CF",
        lightText:"#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
    },

    screens: {
      // 'tablet': '640px',
      // // => @media (min-width: 640px) { ... }

      // 'laptop': '1024px',
      // // => @media (min-width: 1024px) { ... }

      // 'desktop': '1280px',
      // // => @media (min-width: 1280px) { ... }
      xs: "320px",
      sm: "375px",
      sml: "500px",
      md: "667px",
      lg: "960px",
      lgl: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
}