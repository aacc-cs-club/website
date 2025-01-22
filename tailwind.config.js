/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        void: "var(--void)",
        background: "var(--background)",
        border: "var(--border)",
        text: {
          hard: "var(--text-hard)",
          soft: "var(--text-soft)",
        },
        highlight: "#46a6b9",
      },
    },
  },
  plugins: [],
};
