/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#E0A82E",
          "secondary": "#F9D72F",
          "accent": "#181830",
          "neutral": "#181830",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      }
    ],
  },
  content: [
    "./App.vue",
    "./src/**/*.{vue, js, jsx, ts, tsx}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Source Sans Pro', 'Sans-serif'],
        'sri' : ['Sriracha', 'Cursive'],
        'monsterrat' : ['Montserrat', 'sans-serif']
      },
      colors: {
        'base-color': '#F6F6F6',
        'brown': '#A59689',
        'dark-brown': '#553C31',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui')
  ],
}