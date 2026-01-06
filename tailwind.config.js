/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app/**/*.{js,vue,ts}",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#111111',
        'brand-purple': '#42389E',
        'brand-purple-deep': '#0F1026',
        'brand-gold': '#F9A71E',
        'brand-gold-hover': '#D97706',
        'brand-green': '#84CC16',
        'text-white': '#FFFFFF',
        'brand-navy': '#1A1C3D',
        'brand-lavender': '#EDECF6',
        'brand-footer': '#ECEBF5',
        'brand-text-dark': '#323338',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        merriweather: ['Merriweather Sans', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
      },
      boxShadow: {
        'soft': '0 10px 10px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
