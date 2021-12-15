module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
<<<<<<< HEAD
    extend: {
      "3xl":"2000px"
    },
=======
    extend: {},
>>>>>>> 82e46c11347a117223c5f73eeb3ad4f5655fcaf4
  },
  variants: {
    extend: {
      animation: ["group-hover"],
    },
  },
<<<<<<< HEAD
  plugins: [  require('tailwind-scrollbar-hide')],
=======
  plugins: [],
>>>>>>> 82e46c11347a117223c5f73eeb3ad4f5655fcaf4
};
