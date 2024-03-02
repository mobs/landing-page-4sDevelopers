/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient': 'linear-gradient(315deg, #12100e 0%, #2b4162 74%)',
        'blue-gradient': 'linear-gradient(45deg, #3296fa, #2563eb)'
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
