/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        float: ' float 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-5px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
