/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mutant: {
          50: '#f0f4ff',
          100: '#e0e8ff',
          200: '#c7d5ff',
          300: '#a8b8ff',
          400: '#8896ff',
          500: '#6b7aff',
          600: '#5a61ff',
          700: '#4a42e0',
          800: '#3d35b8',
          900: '#332d8a',
          950: '#1f1b52',
        },
        neon: {
          green: '#00ff00',
          cyan: '#00ffff',
          purple: '#ff00ff',
          pink: '#ff1493',
        },
      },
      backgroundImage: {
        'mutant-gradient': 'linear-gradient(135deg, #6b7aff 0%, #ff00ff 50%, #00ffff 100%)',
        'dark-mutant': 'linear-gradient(135deg, #1f1b52 0%, #2d2556 100%)',
      },
      boxShadow: {
        'neon-glow': '0 0 10px rgba(107, 122, 255, 0.5)',
        'neon-glow-pink': '0 0 20px rgba(255, 20, 147, 0.6)',
      },
      fontFamily: {
        'display': ['Orbitron', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
