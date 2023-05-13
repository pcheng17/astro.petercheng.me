/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      fontFamily: {
        // sans: ["sans-serif", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", ...defaultTheme.fontFamily.sans],
        mono: ["Ubuntu Mono", ...defaultTheme.fontFamily.mono]
      },
      colors: {
        'dark-red': '#a00000',
        'floral-white': '#fffbf3',
      },
      typography (theme) {
        return {
          DEFAULT: {
            css: {
              'code::before': {
                content: 'none', // don’t generate the pseudo-element
              },
              'code::after': {
                content: 'none'
              },
              code: {
                fontFace: theme('fontFamily.mono'),
                fontSize: theme('fontSize.md'),
                fontWeight: theme('fontWeight.normal'),
                backgroundColor: theme('colors.slate.100'),
                borderRadius: theme('borderRadius.md'),
                border: `1px solid ${theme('colors.stone.200')}`,
                paddingLeft: theme('spacing[1.5]'),
                paddingRight: theme('spacing[1.5]'),
                paddingTop: theme('spacing[0.5]'),
                paddingBottom: theme('spacing[0.5]'),
              },
            }
          }
        }
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
	},
	plugins: [
    require('@tailwindcss/typography'),
  ],
};
