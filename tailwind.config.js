/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 20%, rgba(0, 0, 0, 0.1) 80%, rgba(0, 0, 0, 0) 100%)",
      },
    },
  },
  plugins: [],
};
