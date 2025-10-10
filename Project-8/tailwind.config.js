/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
        "custom-black":"#0c1c33",
        "custom-blue1":"#2a5ddb",
        "custom-white":"#ffffff",
        "custom-gray":"#515151",
        "custom-blue2":"#0c1c33",
        "custom-white-shade":"#f4f1e1",
        "custom-new-blue":"#95b2db",
        "custom-new-blue2":"#1b2f4d"
      },
      height:{
        "22":"5.5rem"
      },
      screens:{
        'vvsmall':{'max':'520px'},
        'vsmall':{'max':'750px'},
        'small':{'min':'750px', 'max':'1200px'} ,
        'large':{'max':'1500px'}
      },
      scale: {
        101: '1.01',
      },
    },
  },
  plugins: [],
}
