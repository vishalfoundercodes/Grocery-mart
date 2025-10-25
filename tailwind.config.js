/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs2: "375px",
      xs1: "390px",
      xs: "400px",
      xsm: "500px",
      sm: "640px",
      md: "800px",
      lg: "1024px",
      lg2: "1200px",
      "2lg": "1500px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1836px",
    },
    extend: {
      colors: {
        oldsilver: "#828282", // 👈 Added custom color
        lightGray: "#EEEEEE",
      },
      keyframes: {
        translateAnimation: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(var(--x-target), var(--y-target))" },
        },
        pulseFadeOut: {
          "0%": { opacity: 1, transform: "scale(0)" },
          "100%": { opacity: 0, transform: "scale(1)" },
        },
        zoomIn: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        zoomIn: "zoomIn 1s ease-in-out",
        translateAnimation: "translateAnimation 2s ease-in-out forwards",
        "pulse-fade": "pulseFadeOut 2s ease-in-out infinite",
      },
      fontFamily: {
        roboto: [" roboto, sans-serif;"],
        inter: ["Inter", "sans-serif"],
        okra: ["Okra", "Helvetica", "sans-serif"],
      },
      fontSize: {
        ssm: "9px",
        xs: "11px",
        xsm: "13.86px",
        sm: "16px",
        lg: "18px",
      },
    },
  },
  plugins: [],
};

