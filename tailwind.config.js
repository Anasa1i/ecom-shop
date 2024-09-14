/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/img/woman_hero.png')",
        'hero': "url('/src/img/bg_hero.svg')",
        
      },
    },
  },
  plugins: [],
}
