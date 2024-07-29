/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        t: "0 -2px 4px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [require("daisyui")],
};
