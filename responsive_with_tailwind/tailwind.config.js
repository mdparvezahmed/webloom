module.exports = {
  content: ["./dist/**/*.{html,js}", "./src/**/*.{html,js}"],
  safelist: [
    'font-poppins',
    'font-anton',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        anton: ["Anton", "sans-serif"],

      },
      keyframes: {
        "infinite-scroll":{
          "0%":{transform:"translateX(0)"},
          "100%":{transform: "translateX(calc(-50% -20px))"}
        }
      },
      animation: {
        "infinite-scroll": "infinite-scroll 40s linear infinite"
      }
    },
  },
  plugins: [],
}
