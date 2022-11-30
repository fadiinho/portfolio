/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#C778DD",
        "secondary": "#ABB2BF",
        "background": "#282C33"
      },
      backgroundImage: {
        "kanae-kocho": "url('/assets/69edda520bfaf57f9a48a326453f3d5d.jpg')",
        "kanae-kocho-2": "url('/assets/bc6462c9d26913eb2e8f9d933e94409f.jpg')",
        "purple-eyes-girl": "url('/assets/73a76c4107b53510125095986cd55c12.jpg')",
        "butterflies": "url('/assets/deaf7ae2c4fd75e0c47ba15718f3554b.jpg')",
        "akame": "url('/assets/1430183e50d2472a136d21299111cb9a.jpg')",
        "angel": "url('/assets/e061f890424fc88d3b45fc55f501b77f.jpg')",
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ]
}

