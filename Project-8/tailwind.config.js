/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        "custom-black":"#0c1c33",
        "custom-blue":"#2a5ddb",
        "custom-white":"#ffffff",
        "custom-gray":"#515151",
        "custom-blue":"#0c1c33",
        "custom-white-shade":"#f4f1e1",
        "custom-new-blue":"#95b2db"
      },
      height:{
        "22":"5.5rem"
      },
      screens:{
        'vvsmall':{'max':'520px'},
        'vsmall':{'max':'750px'},
        'small':{'max':'1200px'} 
      },
    },
  },
  plugins: [],
}
