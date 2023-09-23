import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        bg: 'url("/background1.png")',
      },
      colors: {
        'primary-default': '#4A41C7',
        'primary-hover': '#1A1467',
        'primary-disabled': '#827BD7',
        'primary-warning': '#C74141',
        'secondary-default': '#262633',
        'secondary-hover': '#090909',
        'secondary-disabled': '#262633',
        'secondary-warning': '#262633',
      }
    },
    
  },
  plugins: [],
}
export default config

