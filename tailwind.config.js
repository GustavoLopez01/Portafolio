/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        react: "url('/img/setup.jpg')",
      },
      fontFamily: {
        montserrat: ["Montserrat+Alternates"],
      },
    },
  },
  plugins: [],
};
