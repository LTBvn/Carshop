export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        surface: '#0d111a',
        surface2: '#131a2a',
        cream: '#f7e8d0',
        accent: '#a367ff',
        accent2: '#6fd1ff',
      },
      boxShadow: {
        glow: '0 20px 80px rgba(163,103,255,0.18)',
      },
      backgroundImage: {
        'hero-glass': 'radial-gradient(circle at top, rgba(163,103,255,0.14), transparent 30%)',
      },
    },
  },
  plugins: [],
};
