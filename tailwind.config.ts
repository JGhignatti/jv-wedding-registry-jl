import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';
import flowbite from 'flowbite/plugin';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      zinc: colors.zinc,
      red: colors.red,
      green: colors.green,
      sky: colors.sky,
      deer: {
        100: '#F4E5DC',
        300: '#E8CBB9',
        400: '#DDB296',
        500: '#D19873',
        600: '#C67E50',
        800: '#9E6540',
      },
      shadow: {
        100: '#E7E7DF',
        300: '#CFD0BE',
        400: '#B6B89E',
        500: '#9EA17D',
        600: '#86895D',
        800: '#6B6E4A',
      },
    }),
    fontFamily: {
      sans: [
        '"Work Sans"',
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        '"Poiret One"',
        'ui-serif',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      script: [
        '"Imperial Script"',
        'ui-serif',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
    },
    extend: {
      screens: {
        xs: '425px',
      },
    },
  },
  plugins: [forms, containerQueries, flowbite],
} satisfies Config;
