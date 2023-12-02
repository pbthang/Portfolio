/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#14213d",
          "primary-content": "#f0f3f6",
          secondary: "#fca311",
          accent: "#fca311",
          neutral: "#212529",
          "base-100": "#f0f3f6",
          info: "#ffffff",
          success: "#12b886",
          warning: "#f57c00",
          error: "#fa5252",
          "--rounded-btn": "6px",
          "--rounded-box": "6px",
        },
      },
    ],
  },
};
