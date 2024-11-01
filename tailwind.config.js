/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        balloonX: "2s infinite alternate ease balloonXAnimFrames",
        balloonY: "6s infinite linear balloonYAnimFrames",
      },
      keyframes: {
        balloonXAnimFrames: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(50px)",
          },
        },
        balloonYAnimFrames: {
          "0%": {
            transform: "translateY(0)",
            opacity: 0,
          },
          "10%": {
            transform: "translateY(0)",
            opacity: 0.5,
          },
          "95%": {
            transform: "translateY(-480px)",
            opacity: 0.5,
          },
          "100%": {
            transform: "translateY(-500px)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
