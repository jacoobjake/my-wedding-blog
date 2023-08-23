/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'french-beige': '#CAAD7E',
      'dirty-white': '#ECEBC9',
      'beige': '#F6F6DB',
      'tea-green': '#D5E7B8',
      'moss-green': '#C4DEA4',
      'apple-green': '#A7D489',
    },
  },
  plugins: [require('flowbite/plugin')],
}
