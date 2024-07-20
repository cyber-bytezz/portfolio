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
      },
      backgroundColor: {
        "dark-primary": "#111111",
        "dark-alternative": "#161616",
        "dark-secondary": "#1E90FF", // Updated to Dodger Blue
        "light-blue": "#ADD8E6", // Light Blue
        "soft-blue": "#87CEFA", // Light Sky Blue
      },
      borderColor: {
        "purple-primary": "#1E90FF", // Updated to Dodger Blue
        "light-blue": "#ADD8E6", // Light Blue
      },
      colors: {
        primary: "#F9FAFC",
        "dark-purple": "#1E90FF", // Updated to Dodger Blue
        "light-blue": "#ADD8E6", // Light Blue
        "soft-blue": "#87CEFA", // Light Sky Blue
        "muted-blue": "#4682B4", // Steel Blue
      },
      fontFamily: {
        dm_sans: ["var(--font-dm_sans)"],
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
