/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        sunflower: {
          50: '#fffaf0',
          100: '#fff8e1',
          200: '#ffdc80',
          300: '#ffb020',
          400: '#ffa500',
          500: '#ff9500',
          600: '#f08000',
        },
        cream: '#f5f1ed',
        'soft-yellow': '#fff9e6',
        'light-brown': '#d4a574',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        pulse_slow: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        typewriter: 'typewriter 4s steps(40, end) infinite',
        shimmer: 'shimmer 2s infinite',
        bounce_slow: 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        shimmer: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
      },
      backdropBlur: {
        xs: '2px',
      }
    }
  },
  plugins: []
}
