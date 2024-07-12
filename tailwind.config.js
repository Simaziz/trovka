/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    colors: {
      Blue: "022278",
      Yellow: "FFB600",
    },
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
