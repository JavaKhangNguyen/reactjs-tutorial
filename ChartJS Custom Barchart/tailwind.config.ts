/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: '768px',
      lg: '1200px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Inter Tight', 'sans-serif'],
    },
    fontSize: {
      'h1-xl': [
        '96px',
        {
          lineHeight: '105%',
          fontWeight: '700',
        },
      ],
      'h1-dt': [
        '72px',
        {
          lineHeight: '105%',
          fontWeight: '700',
        },
      ],
      'h1-mb': [
        '48px',
        {
          lineHeight: '105%',
          fontWeight: '700',
        },
      ],
      'h2-xl': [
        '64px',
        {
          lineHeight: '120%',
          fontWeight: '600',
        },
      ],
      'h2-dt': [
        '56px',
        {
          lineHeight: '120%',
          fontWeight: '600',
        },
      ],
      'h2-mb': [
        '32px',
        {
          lineHeight: '120%',
          fontWeight: '600',
        },
      ],
      'h3-dt': [
        '32px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'h3-mb': [
        '24px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'body1-dt': [
        '22px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'body1-mb': [
        '18px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'body1-dt-bold': [
        '20px',
        {
          lineHeight: '150%',
          fontWeight: '600',
          letterSpacing: '0.2px',
        },
      ],
      'body2-dt': [
        '20px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'body2-mb': [
        '16px',
        {
          lineHeight: '140%',
          fontWeight: '500',
        },
      ],
      'body2-dt-semibold': [
        '18px',
        {
          lineHeight: '140%',
          fontWeight: '600',
        },
      ],
    }
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7BFF86',
          100: '#D7FFD3',
          500: '#0038FF',
          700: '#2BBA37',
        },
        secondary: {
          DEFAULT: '#3761F9',
          50: '#F7F9FF',
          100: '#DFE5F8',
          500: '#3761F9',
        },
        gray: {
          100: '#F1F1F1',
          200: '#EBEBEB',
          300: '#B8B8B8',
          500: '#7C7F81',
          700: '#57595A',
          850: '#38393A',
          1000: '#0B000D',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      }, 
    },
  plugins: [],
}

