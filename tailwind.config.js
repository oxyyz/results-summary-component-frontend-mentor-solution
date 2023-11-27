/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["HankenGrotest", "sans-serif"],
      },
      colors: {
        "light-red": "#F55",
        "orangey-yellow": "#FFB21E",
        "green-teal": "#00BB8F",
        "cobalt-blue": "#1125D6",

        "pale-blue": "hsl(221, 100%, 96%)",
        "light-lavender": "hsl(241, 100%, 89%)",
        "dark-gray-blue": "hsl(224, 30%, 27%)",
        "light-blue": "#CAC9FF",
        "dark-navy": "#303B59",
      },
      boxShadow: {
        "wrapper-shadow": "0px 30px 60px 0px rgba(61, 108, 236, 0.15)",
      },
      backgroundImage: {
        "scale-bg":
          "linear-gradient(180deg, #75F 0%, #6943FF 0.01%, #2F2CE9 100%)",
        "oval-bg":
          "linear-gradient(180deg, #4D21C9 0%, rgba(37, 33, 201, 0.00) 100%, rgba(37, 33, 201, 0.00) 100%)",
        "red-95-white":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%), #F55",
      },
    },
  },
  plugins: [],
}
