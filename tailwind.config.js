/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  }, // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/forms")],
};
