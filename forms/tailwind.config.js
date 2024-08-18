/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flash: {
          "0%, 100%": { "border-color": "#4b5563" },
          "50%": { "border-color": "#f3f4f6" },
        },
      },
      animation: {
        flash: "flash 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
