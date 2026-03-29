/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#101010",
          sky: "#1d4ed8",
          mint: "#c4ff4d",
          cream: "#f3efe7",
          ember: "#f97316",
          steel: "#c9d4df",
        },
      },
      fontFamily: {
        display: ["Archivo", "sans-serif"],
        body: ["IBM Plex Sans", "sans-serif"],
      },
      boxShadow: {
        float: "10px 10px 0 rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
