/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        WorkSan: ["Work Sans", "sans-serif"],
      },
      boxShadow: {
        NavShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
        CardShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
    },
  },
  plugins: [require("daisyui")],
};
