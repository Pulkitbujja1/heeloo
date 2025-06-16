/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F0F0F',
        secondary: '#1A1A1A',
        accent: '#00FF87',
        'accent-dark': '#00CC6A',
        'gray-850': '#1F1F1F',
        'gray-750': '#2A2A2A',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00FF87, 0 0 10px #00FF87, 0 0 15px #00FF87' },
          '100%': { boxShadow: '0 0 10px #00FF87, 0 0 20px #00FF87, 0 0 30px #00FF87' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hologram': 'linear-gradient(45deg, #00FF87, #00CC6A, #009954)',
      }
    },
  },
  plugins: [],
};