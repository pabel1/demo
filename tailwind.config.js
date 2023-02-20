/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "576px",
      md: "764px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "20px",
      screens: {
        sm: "640px",
        md: "760px",
        lg: "1015px",
        xl: "1260px",
        "2xl": "1380px",
        '3xl': '1550px',
      },
    },
    extend: {
      colors: {
        primaryColor: "#684F9B",
        secondary: "#EB6D46",
        bgColor: "#F5F6FA",
        headingText: "#313E5B",
        lightText: "#80735F",
        textColor: "#313E5B",
      },
      listStyleType: {
        listUl: "disc",
        listOl: "decimal",
      },
      width: {
        "40-r": "40rem",
        "35-r": "35rem",
        "30-r": "30rem",
      },
      height: {
        "40-r": "40rem",
        "35-r": "35rem",
        "30-r": "30rem",
      },
      fontFamily: {
        myfont: ["Source Code Pro", "monospace"],
      },
      boxShadow: {
        "5xl": "20px 20px 50px rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        leftRight: {
          "0%, 100%": { transform: "translateX(-10%)" },
          "50%": { transform: "translateX(0)" },
        },
        upDown: {
          "0%, 100%": { transform: "translateY(-10%)" },
          "50%": { transform: "translateX(0)" },
        },
        zoomInOut: {
          "0%, 100%": { transform: "scale(0.8)" },
          "50%": { transform: "scale(1)" },
        },
      },
      animation: {
        leftRight: `leftRight 3s ease-in-out infinite`,
        upDown: `upDown 3s ease-in-out infinite`,
        zoomInOut: `zoomInOut 5s ease-in-out infinite`,
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
