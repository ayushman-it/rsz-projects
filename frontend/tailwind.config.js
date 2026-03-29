/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#0f172a",
          sky: "#3b82f6",
          mint: "#99f6e4",
          cream: "#fff7ed",
          ember: "#fb923c",
          steel: "#dbe4f0",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        float: "0 20px 70px rgba(15, 23, 42, 0.16)",
      },
      backgroundImage: {
        mesh:
          "radial-gradient(circle at top left, rgba(59,130,246,0.22), transparent 35%), radial-gradient(circle at bottom right, rgba(251,146,60,0.18), transparent 30%), linear-gradient(135deg, #fff7ed 0%, #f8fafc 45%, #eff6ff 100%)",
      },
    },
  },
  plugins: [],
};
