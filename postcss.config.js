// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [tailwindcss('./tailwind.config.js'), require('autoprefixer')],
};
