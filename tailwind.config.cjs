/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        "primary": "#0cad8a",
        "secondary": "#8ef99c",
        "accent": "#eaa4ea",
        "neutral": "#2A212C",
        "base-100": "#ffffff",
        "info": "#368CC9",
        "success": "#44DA8C",
        "warning": "#D77104",
        "error": "#E57966",
        },
      },
    ],
  },
};
