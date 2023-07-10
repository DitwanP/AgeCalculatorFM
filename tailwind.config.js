/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
    },
    extend: {
      colors: {
        white: "#ffffff",
        "off-white": "#f0f0f0",
        "light-grey": "#dbdbdb",
        "smokey-grey": "#707070",
        "off-black": "#141414",
        purple: "#854dff",
        "light-red": "#ff5757",
      },
      letterSpacing: {
        "widest-2": "0.2em",
        "widest-3": "0.3em",
      },
      spacing: {
        20: "4.8rem",
        21: "5.2rem",
        23: "6.5rem",
      },
      borderRadius: {
        "4xl": "2.5rem",
        "5xl": "5.5rem",
        "9xl": "9.5rem",
        "12xl": "12.5rem",
        "14xl": "14.5rem",
        "16xl": "16.5rem",
        "18xl": "18.5rem",
      },
      margin: {
        18: "4.2rem",
      },
      maxWidth: {
        "2xs": "17rem",
        "4xs": "12.5rem",
        "8xl": "85rem",
        "9xl": "90rem",
      },
      fontSize: {
        "5xl": "3.5rem",
        "10xl": "9rem",
        "11xl": "11.5rem",
        "12xl": "12.5rem",
        "14xl": "14.5rem",
        "15xl": "15.5rem",
        "16xl": "16.5rem",
        "18xl": "18.5rem",
      },
    },
  },
  plugins: [],
};
