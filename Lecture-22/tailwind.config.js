/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
      "medium-turquoise":"#48D1CC",
      "mypink":"#FF69B4",
    },
    fontFamily: {
      serif: ['Merriweather', 'serif'],
    },
      fontSize: {
        "10xl":"1rem"
      },
      screens: {
        'move':{'min':'640px' , 'max':'768px'}
      },
    },
  },
  plugins: [],
}

