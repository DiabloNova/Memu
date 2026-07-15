/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgLight: "#F8F8F8",
        orangePin: "#F45B31",
        bluePin: "#3A73FA",
        purplePin: "#9455FA",
        noteOrangeBg: "#FDF5F2",
        noteBlueBg: "#F3F6FD",
        notePurpleBg: "#F7F3FD",
        cardBg: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        handwritten: ["var(--font-caveat)", "cursive"],
      },
      boxShadow: {
        'pin': '0 8px 16px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.1)',
        'pin-shadow': '0 12px 24px rgba(0,0,0,0.25)',
        'card': '0 10px 30px -5px rgba(0,0,0,0.06), 0 4px 12px -2px rgba(0,0,0,0.03)',
        'card-hover': '0 20px 40px -5px rgba(0,0,0,0.1), 0 8px 20px -2px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
}