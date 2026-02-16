module.exports = {
  style: {
    postcss: {
      mode: 'extends',
      plugins: [
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer'),
      ],
    },
  },
}
