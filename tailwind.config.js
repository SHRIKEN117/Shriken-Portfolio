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
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        bg: '#27272a',
        carbon: '#000000',
        inkwell: '#0f0f10',
        surface: '#27272a',
        border: '#e5e7eb',
        text: '#ffffff',
        muted: '#abafb4',
        subtle: '#6e727a',
        skyline: '#99a1af',
        cyan: '#52e1fe',
        orange: '#ffb86a',
      },
      borderRadius: {
        xs: '2px',
        sm: '8px',
        md: '12px',
        lg: '18px',
        xl: '24px',
      },
      letterSpacing: {
        display: '-0.05em',
        heading: '-0.025em',
        'heading-sm': '-0.01em',
        subheading: '-0.008em',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
