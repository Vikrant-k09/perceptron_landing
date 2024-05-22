/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-beige': '#f5f5dc',
        'complementary-dark': '#3b3b3b', 
        'border-neutral': '#707070', 
      },
    },
  },
  plugins: [],
};
