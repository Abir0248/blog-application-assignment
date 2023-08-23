/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        burlywood: "#DEB887",
        lightgray: "#F8F8F8",
        peru: "#CD853F",
        offwhite: "#FCFCFC",
        sienna: "#A0522D",
        saddlebrown: "#8B4513",
      },
      textColor: {
        peru: "#CD853F",
        sienna: "#A0522D",
        saddlebrown: "#8B4513",
      },
    },
  },
  plugins: [],
};
