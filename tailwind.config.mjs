/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        secondary: { DEFAULT: "#073762" },
        ruddy_blue: {
          DEFAULT: "#71ABD9",
          100: "#0e2334",
          200: "#1c4669",
          300: "#2a699d",
          400: "#3e8ccc",
          500: "#71abd9",
          600: "#8ebce1",
          700: "#aacde9",
          800: "#c7ddf0",
          900: "#e3eef8"
        },
        beaver: {
          DEFAULT: "#877764",
          100: "#1b1814",
          200: "#363028",
          300: "#51473c",
          400: "#6c5f50",
          500: "#877764",
          600: "#a19280",
          700: "#b9aea0",
          800: "#d0c9c0",
          900: "#e8e4df"
        },
        azul: {
          DEFAULT: "#2A72BE",
          100: "#081626",
          200: "#112d4b",
          300: "#194371",
          400: "#215a97",
          500: "#2a72be",
          600: "#478cd7",
          700: "#75a9e1",
          800: "#a3c6eb",
          900: "#d1e2f5"
        },
        dim_gray: {
          DEFAULT: "#616A6B",
          100: "#131515",
          200: "#272a2b",
          300: "#3a4040",
          400: "#4e5556",
          500: "#616a6b",
          600: "#7e898b",
          700: "#9fa7a8",
          800: "#bfc4c5",
          900: "#dfe2e2"
        },
        outer_space: {
          DEFAULT: "#3A4343",
          100: "#0c0e0e",
          200: "#181b1b",
          300: "#242929",
          400: "#2f3737",
          500: "#3a4343",
          600: "#5f6d6d",
          700: "#849494",
          800: "#adb8b8",
          900: "#d6dbdb"
        },
        prussian_blue: {
          DEFAULT: "#202D42",
          100: "#06090d",
          200: "#0d121a",
          300: "#131b27",
          400: "#192434",
          500: "#202d42",
          600: "#3a5279",
          700: "#5879ae",
          800: "#8fa6c9",
          900: "#c7d2e4"
        },
        green_yellow: {
          DEFAULT: "#A8F144",
          100: "#243a04",
          200: "#477409",
          300: "#6bae0d",
          400: "#8ee711",
          500: "#a8f144",
          600: "#bbf46b",
          700: "#ccf790",
          800: "#ddf9b5",
          900: "#eefcda"
        }
      },
      screens: {
        "3xl": "1920px"
      },
      dropShadow: {
        solid: "4px 4px 4px #333333"
      }
    }
  },
  plugins: []
};
