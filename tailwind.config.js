/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './**/*.vue',
    './plugins/html-serializer.js',
    './**/*.svg'
  ],
  theme: {
    extend: {
      minHeight: {
        '200p': '200px',
        '275p': '275px',
        '500p': '500px',
      },
      inset: {
        40 : '10rem',
      }
    },
  },
  plugins: [],
}

