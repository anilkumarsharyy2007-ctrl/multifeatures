/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        midnight: {
          900: '#060913',
          800: '#0a0f1d',
          700: '#111827',
          600: '#1f293d',
        },
        neon: {
          blue: '#00f0ff',
          cyan: '#06b6d4',
          purple: '#a855f7',
          violet: '#8b5cf6',
          pink: '#ec4899',
          magenta: '#d946ef',
          orange: '#f97316',
          green: '#10b981',
          gold: '#eab308',
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(0,240,255,0.4))' },
          '100%': { opacity: '0.9', filter: 'drop-shadow(0 0 30px rgba(168,85,247,0.8))' },
        }
      }
    },
  },
  plugins: [],
}
