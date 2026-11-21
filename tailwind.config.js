/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        blush: {
          50: '#FFF5F8',
          100: '#FDEBF1',
          200: '#FBD7E4',
          300: '#F8B4CD',
          400: '#F47FAF',
          500: '#EC4899',
          600: '#DB2777',
          700: '#BE185D',
          800: '#9D174D',
          900: '#831843',
        },
        roseGold: {
          50: '#FDF8F5',
          100: '#FAF0E8',
          200: '#F4DEC8',
          300: '#E8BFA3',
          400: '#D89E7E',
          500: '#C57E5B',
          600: '#B06443',
          700: '#8E4D31',
        },
        berry: {
          50: '#FAF5FA',
          100: '#F3E8F3',
          200: '#E7D1E7',
          300: '#D5AECF',
          700: '#641D52',
          800: '#48153C',
          900: '#2A0C23',
          950: '#1A0616',
        },
        champagne: {
          50: '#FAF7F2',
          100: '#F5EFE3',
          200: '#EBDEC8',
          300: '#DEC6A3',
          400: '#CEAA7B',
          500: '#BD915A',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', '"Alex Brush"', 'cursive'],
        display: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-fast': 'marquee 18s linear infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-delayed': 'float 5s ease-in-out 2.5s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 18s linear infinite',
        'heartbeat': 'heartbeat 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.08)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.08)' },
          '70%': { transform: 'scale(1)' },
        }
      },
      boxShadow: {
        'pink-soft': '0 10px 25px -5px rgba(244, 114, 182, 0.18), 0 8px 10px -6px rgba(244, 114, 182, 0.1)',
        'pink-glow': '0 0 35px -5px rgba(236, 72, 153, 0.35)',
        'rosegold-glow': '0 0 30px -4px rgba(216, 158, 126, 0.35)',
        'card-soft': '0 4px 20px -2px rgba(99, 29, 82, 0.06), 0 2px 6px -1px rgba(99, 29, 82, 0.04)',
      }
    },
  },
  plugins: [],
}
