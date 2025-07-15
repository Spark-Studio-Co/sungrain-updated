/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#F38810",
        secondary: "#223137",
        tertiary: "#D25127",
      },
      fontFamily: {
        gotham: ["Gotham Pro", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        unisans: ["Uni Sans", "sans-serif"],
      },
      screens: {
        "1.5xl": "1150px",
        "3xl": "1700px",
        "4xl": "1900px",
        "5xl": "2100px",
        "6xl": "2300px",
        "7xl": "2560px",
      },
      animation: {
        "spin-slow": "spin-slow 3s linear infinite",
        "grain-fall": "grain-fall 2s ease-in-out infinite",
        "grain-bounce": "grain-bounce 1s ease-in-out infinite",
      },
      keyframes: {
        "spin-slow": {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        "grain-fall": {
          "0%": {
            transform: "translateY(-20px) rotate(0deg)",
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(20px) rotate(360deg)",
            opacity: "0",
          },
        },
        "grain-bounce": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
      },
    },
  },
  plugins: [],
};
