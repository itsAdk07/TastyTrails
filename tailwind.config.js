// tailwind.config.js

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#fdf2f8",
          "100": "#fce7f3",
          "200": "#fbcfe8",
          "300": "#f9a8d4",
          "400": "#f472b6",
          "500": "#ec4899",
          "600": "#db2777",
          "700": "#be185d",
          "800": "#9d174d",
          "900": "#831843",
          "950": "#500724"
        }
      },
      fontFamily: {
        'body': [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ],
        'sans': [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ]
      }
    }
  },
  plugins: [],
};
