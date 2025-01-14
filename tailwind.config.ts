import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';
import flowbite from 'flowbite/plugin';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
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
        '"The Seasons"',
        'ui-serif',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      'serif-alt': [
        '"Noto Serif"',
        'ui-serif',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      fancy: [
        '"Pinyon Script"',
        'ui-serif',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
    },
    extend: {
      colors: {
        primary: '#85895d',
        secondary: '#c28456',
        'secondary-alt': '#f1d89f',
        tertiary: '#e6ece2',
      },
      screens: {
        xs: '425px',
      },
    },
  },

  plugins: [forms, containerQueries, flowbite],
} satisfies Config;
