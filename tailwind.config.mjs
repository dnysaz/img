/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#0D1829',
        navyLight: '#162236',
        brick: '#DC2626',
        brickLight: '#EF4444',
        orange: '#EA580C',
        orangeLight: '#F97316',
        warm: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
