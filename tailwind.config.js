/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2A4A',
          light: '#2E4270',
          soft: '#4A5D85',
        },
        blush: {
          50: '#FDF6F8',
          100: '#FBEAEF',
          200: '#F5D6E0',
          300: '#EEBECF',
        },
        gold: {
          DEFAULT: '#B4913C',
          light: '#D4B872',
          soft: '#F1E6C8',
        },
        cream: '#FFFCF9',
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Work Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(27, 42, 74, 0.18)',
        card: '0 12px 32px -12px rgba(27, 42, 74, 0.14)',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-16px) rotate(3deg)' },
        },
        floatSlower: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(14px)' },
        },
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        floatSlow: 'floatSlow 8s ease-in-out infinite',
        floatSlower: 'floatSlower 10s ease-in-out infinite',
        riseIn: 'riseIn 0.9s ease-out forwards',
      },
    },
  },
  plugins: [],
}
