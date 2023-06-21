/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1440px',
        'content-container': '1140px',
        'container-small': '1024px',
        'container-xs': '768px',
      },
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
      fontFamily: {
        'nanum-font': ['NanumSquareNeo'],
      },
      boxShadow: {
        'navbar-shadow': '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
      },
      colors: {
        'body-color': '#0a192f',
        'text-green': '#64ffda',
        'text-light': '#ccd6f6',
        'text-dark': '#8892b0',
        'hover-color': 'rgba(100,255,218,0.1)',
      },
    },
  },
  plugins: [],
};
