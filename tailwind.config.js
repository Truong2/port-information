/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary100: '#EBF1FF',
        primary200: '#E1EBFE',
        primary300: '#C9DAFB',
        primary400: '#A2BFF7',
        primary500: '#6D9AF2',
        primary600: '#2A6AEB',
        primary700: '#2866E2',
        primary800: '#235BCB',
        primary900: '#1A49A6',
        primary1000: '#0F3073',
        primary1100: '#001133',

        // neutral
        neutral100: '#F5F7FA',
        neutral200: '#EAECEF',
        neutral300: '#D2D4D8',
        neutral400: '#C0C3C7',
        neutral500: '#B2B5B9',
        neutral600: '#95989D',
        neutral700: '#7A7E84',
        neutral800: '#63666D',
        neutral850: '#555f70',
        neutral900: '#4E5259',
        neutral1000: '#3C4048',
        neutral1100: '#2D313A',
        neutral1200: '#21252E',
        neutral1300: '#181C25',

        /* System colors*/
        // Red
        red100: '#FCE6E6',
        red200: '#FBD7D7',
        red300: '#F9CAC9',
        red400: '#F5B0AE',
        red500: '#F4A19F',
        red600: '#F2908E',
        red700: '#EF7371',
        red800: '#EE6562',
        red900: '#ED5755',
        red950: '#ef4444',
        red1000: '#EB4542',
        red1100: '#D03532',
        red1200: '#BA2825',
        red1300: '#A81D1B',
        red1400: '#9A1512',
        red1500: '#8A0B09',

        // Green
        greenSys100: '#CBFFDC',
        greenSys200: '#BCFAD1',
        greenSys300: '#AAF4C2',
        greenSys400: '#9EF0B9',
        greenSys500: '#90EBAF',
        greenSys600: '#81E6A3',
        greenSys700: '#70E096',
        greenSys800: '#2BD965',
        greenSys1100: '#2BD965',
        greenSys1200: '#24B253',
        greenSys1300: '#1CA449',

        // Yellow
        yellow100: '#FFF4DE',
        yellow200: '#FFEFCE',
        yellow300: '#FFE7B6',
        yellow400: '#FFE1A6',
        yellow500: '#FFDB95',
        yellow600: '#FFD581',
        yellow700: '#FFCD6A',
        yellow800: '#FFC147',
        yellow900: '#FFB21A',
        yellow1100: '#F3A917',
        yellow12000: '#E19C12',
        yellow1300: '#DB9813',
        yellow1400: '#C6870A',

        /* Accent colors*/
        // Purple
        purple100: '#F0E8FF',
        purple150: '#E6D7FF',
        purple200: '#E2D4FE',
        purple300: '#DBC9FE',
        purple400: '#D2BCFD',
        purple500: '#C7ADFC',
        purple600: '#BB9BFC',
        purple700: '#AE87FB',
        purple800: '#AE87FB',
        purple900: '#7B3DF7',
        purple950: '#833EF5',
        purple1000: '#7B3DF7',

        // Green
        greenAccent100: '#CBFFDC',
        greenAccent200: '#BCFAD1',
        greenAccent300: '#AAF4C2',
        greenAccent400: '#9EF0B9',
        greenAccent500: '#90EBAF',
        greenAccent600: '#81E6A3',
        greenAccent700: '#81E6A3',
        greenAccent800: '#81E6A3',
        greenAccent900: '#49D377',
        greenAccent1000: '#33CC66',
        greenAccent1100: '#2ABD5B',
        greenAccent1200: '#24B253',
        greenAccent1300: '#1CA449',

        // Blue
        blue100: '#E8FCFF',
        blue200: '#D3F8FE',
        blue300: '#C8F6FE',
        blue400: '#BBF4FD',
        blue500: '#9AEEFB',
        blue600: '#86EAFB',
        blue700: '#70E6FA',
        blue800: '#57E2F8',
        blue900: '#3DDDF7',
        blue1000: '#20D8F6',

        // White
        white: '#FFFFFF',

        royalblue: {
          100: '#2a6aeb',
          200: '#2866e2',
          300: '#235bcb'
        },
        white: '#fff',
        gray: {
          100: '#7a7e84',
          200: '#181c25'
        },
        aliceblue: '#ebf1ff',
        darkslategray: '#3c4048',
        whitesmoke: {
          100: '#f5f7fa',
          200: '#eaecef'
        },
        lightgray: '#d2d4d8',
        silver: {
          100: '#c0c3c7',
          200: '#b2b5b9'
        },
        lightsteelblue: '#c9dafb',
        tomato: '#eb4542',
        dimgray: '#63666d',
        cornflowerblue: '#6d9af2',
        darkslateblue: '#1a49a6',
        mediumspringgreen: '#33cc66'
      },

      fontFamily: {
        'headline-18-semi-bold': 'Inter'
      },
      borderRadius: {
        xl: '20px'
      }
    },
    fontSize: {
      sm: '14px',
      xs: '12px',
      '9xl': '28px',
      '3xs': '10px',
      lg: '18px',
      base: '16px',
      inherit: 'inherit'
    }
  },
  corePlugins: {
    preflight: false
  },
  plugins: []
}
