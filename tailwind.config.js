/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'custom-md': '0 4px 3px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
