import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: 'var(--portfolio-bg)',
          cream: 'var(--portfolio-cream)',
          sand: 'var(--portfolio-sand)',
          dark: 'var(--portfolio-dark)',
          accent: 'var(--portfolio-accent)',
          muted: 'var(--portfolio-muted)',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans Condensed"', 'sans-serif'],
        serif: ['"IBM Plex Serif"', 'serif'],
        fell: ['"IM Fell DW Pica"', 'serif'],
        fellsc: ['"IM Fell DW Pica SC"', 'serif'],
        apple: ['"Homemade Apple"', 'cursive'],
        hubballi: ['Hubballi', 'cursive'],
        instrument: ['"Instrument Serif"', 'serif'],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};

export default config;
