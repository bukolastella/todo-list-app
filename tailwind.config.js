module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      custom: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "sky-blue": "#61dbfb",
        "dark-theme": "#393f49",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
