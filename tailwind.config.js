/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // ADD THESE TWO BLOCKS BELOW
      colors: {
        'cr-orange': '#F47521',
        'cr-black': '#000000',
        'cr-anthracite': '#23252B',
        'cr-grey': '#A0A0A0',
      },
      aspectRatio: {
        'poster': '2 / 3',
      },
    },
  },
  plugins: [],
}
