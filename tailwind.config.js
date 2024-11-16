/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glitter: "0 0 10px #ffd700",
      },
    },
  },
  plugins: [],
};
