/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        bg: '#000000',
        surface: '#202020',
        border: '#333333',
        text: '#ffffff',
        muted: '#999999',
        'light-muted': '#c0c0c0',
        subtle: '#cccccc',
        'slate-dust': '#f5f5f0',
        accent: '#c0c0c0',
      },
      borderRadius: {
        card: '10px',
        pill: '9999px',
      },
      letterSpacing: {
        display: '-0.05em',
        'heading-lg': '-0.025em',
        heading: '-0.02em',
        'heading-sm': '-0.015em',
        subheading: '-0.01em',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
