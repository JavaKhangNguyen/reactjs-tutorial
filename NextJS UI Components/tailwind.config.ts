 
import type { Config } from 'tailwindcss';

export default {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	fontFamily: {
  		sans: ['Raleway', 'sans-serif']
  	},
  	fontSize: {
  		h6: [
  			'18px',
  			{
  				lineHeight: '24px',
  				fontWeight: '700'
  			}
  		],
  		h5: [
  			'24px',
  			{
  				lineHeight: '32px',
  				fontWeight: '700'
  			}
  		],
  		h4: [
  			'28px',
  			{
  				lineHeight: '36px',
  				fontWeight: '700'
  			}
  		],
  		h3: [
  			'36px',
  			{
  				lineHeight: '44px',
  				fontWeight: '700'
  			}
  		],
  		h2: [
  			'48px',
  			{
  				lineHeight: '60px',
  				fontWeight: '700'
  			}
  		],
  		h1: [
  			'60px',
  			{
  				lineHeight: '72px',
  				fontWeight: '700'
  			}
  		],
  		'b3-regular': [
  			'14px',
  			{
  				lineHeight: '20px',
  				fontWeight: '400'
  			}
  		],
  		'b3-semibold': [
  			'14px',
  			{
  				lineHeight: '20px',
  				fontWeight: '600'
  			}
  		],
  		'b3-bold': [
  			'14px',
  			{
  				lineHeight: '20px',
  				fontWeight: '700'
  			}
  		],
  		'b2-regular': [
  			'16px',
  			{
  				lineHeight: '24px',
  				fontWeight: '400'
  			}
  		],
  		'b2-semibold': [
  			'16px',
  			{
  				lineHeight: '24px',
  				fontWeight: '600'
  			}
  		],
  		'b2-bold': [
  			'16px',
  			{
  				lineHeight: '24px',
  				fontWeight: '700'
  			}
  		],
  		'b1-regular': [
  			'16px',
  			{
  				lineHeight: '24px',
  				fontWeight: '400'
  			}
  		],
  		'b1-semibold': [
  			'18px',
  			{
  				lineHeight: '28px',
  				fontWeight: '600'
  			}
  		],
  		'b1-bold': [
  			'18px',
  			{
  				lineHeight: '28px',
  				fontWeight: '700'
  			}
  		],
  		'b0-regular': [
  			'22px',
  			{
  				lineHeight: '34px',
  				fontWeight: '4600'
  			}
  		],
  		'sm-regular': [
  			'8px',
  			{
  				lineHeight: '12px',
  				fontWeight: '400'
  			}
  		],
  		'hint-regular': [
  			'10px',
  			{
  				lineHeight: '14px',
  				fontWeight: '400'
  			}
  		],
  		'caption-regular': [
  			'12px',
  			{
  				lineHeight: '18px',
  				fontWeight: '400'
  			}
  		],
  		'caption-semibold': [
  			'12px',
  			{
  				lineHeight: '18px',
  				fontWeight: '600'
  			}
  		],
  		'caption-bold': [
  			'12px',
  			{
  				lineHeight: '18px',
  				fontWeight: '700'
  			}
  		],
  		hyperlink: [
  			'14px',
  			{
  				lineHeight: '20px',
  				fontWeight: '400'
  			}
  		],
  		'sm-btn-regular': [
  			'14px',
  			{
  				lineHeight: '20px',
  				fontWeight: '700'
  			}
  		],
  		'lg-btn-regular': [
  			'16px',
  			{
  				lineHeight: '24px',
  				fontWeight: '700'
  			}
  		]
  	},
  	extend: {
  		colors: {
  			primary: {
  				'100': '#FFEAD8',
  				'200': '#FFD4AF',
  				'300': '#FFB77A',
  				'400': '#FBA861',
  				'500': '#F19444',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'100': '#E3FFEB',
  				'200': '#CEFFDC',
  				'300': '#ABFFC3',
  				'400': '#97F2B1',
  				'500': '#74E494',
  				'900': '#40A05B',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			info: {
  				'100': '#B5EEF1',
  				'900': '#313F40'
  			},
  			success: {
  				'100': '#E6F6ED',
  				'600': '#00A344',
  				'900': '#00662B',
  				'1000': '#1D3025'
  			},
  			warning: {
  				'100': '#FFF3CD',
  				'600': '#FFC107',
  				'700': '#EEB200'
  			},
  			error: {
  				'100': '#FEEAE8',
  				'600': '#E9380D',
  				'900': '#660F0A',
  				'1000': '#2E2222'
  			},
  			red: {
  				'600': '#F52419'
  			},
  			pink: {
  				'100': '#FCDEE8',
  				'600': '#EA4AAA',
  				'900': '#80285D'
  			},
  			raspberry: {
  				'100': '#FCE4F2',
  				'600': '#E91E63',
  				'900': '#801036'
  			},
  			purple: {
  				'100': '#F0DFF3',
  				'400': '#E497FF',
  				'600': '#9C27B0',
  				'900': '#5A1766',
  				'1000': '#361C40',
  				'1100': '#291E2E'
  			},
  			'deep-purple': {
  				'100': '#EAE3F6',
  				'600': '#6F42C1',
  				'900': '#3A1D6E'
  			},
  			indigo: {
  				'100': '#D9DCF0',
  				'600': '#3F51B5',
  				'900': '#242E66'
  			},
  			blue: {
  				'100': '#D3EAFD',
  				'400': '#78C3FF',
  				'600': '#2196F3',
  				'900': '#0D3666',
  				'1000': '#1F2D48'
  			},
  			cyan: {
  				'100': '#CCF2F6',
  				'600': '#00BCD4',
  				'900': '#007180'
  			},
  			teal: {
  				'100': '#C2E1E3',
  				'600': '#0EA2AC',
  				'900': '#086066',
  				'1000': '#224A4D'
  			},
  			green: {
  				'100': '#CCEDDA',
  				'900': '#1C5032'
  			},
  			lime: {
  				'100': '#F5F8D7',
  				'600': '#CDDC39',
  				'900': '#778021'
  			},
  			yellow: {
  				'100': '#FFFBD8',
  				'600': '#FFEB3B',
  				'800': '#C89C00',
  				'1000': '#463D15',
  				'1100': '#242114',
  				'1200': '#FFD862'
  			},
  			amber: {
  				'800': '#806103'
  			},
  			orange: {
  				'100': '#FFE6D3',
  				'600': '#FE8425',
  				'800': '#DA5F00'
  			},
  			'deep-orange': {
  				'100': '#FFDDD3',
  				'600': '#FF5722',
  				'800': '#802C11'
  			},
  			brown: {
  				'100': '#E4DDDA',
  				'600': '#795548',
  				'800': '#4D362E',
  				'900': '#3E1B1E',
  				'1000': '#291C1D'
  			},
  			gray: {
  				'100': '#F2F2F2',
  				'400': '#999999',
  				'800': '#4C4C4C'
  			},
  			'blue-grey': {
  				'100': '#DFE5E8',
  				'600': '#607D8B',
  				'900': '#35454D',
  				'1000': '#242A37'
  			},
  			grayscale: {
  				'50': '#0D0D0D',
  				'100': '#141414',
  				'150': '#262626',
  				'200': '#363636',
  				'300': '#575757',
  				'500': '#808080',
  				'700': '#B3B3B3',
  				'800': '#CCCCCC',
  				'900': '#E5E5E5',
  				'1000': '#FCFCFC',
				'white': '#FFFFFF',
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require('tailwindcss/plugin'), require("tailwindcss-animate")],
} satisfies Config;
