module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 100: "#f1f5f9", 900: "#0f172a", "50_99": "#f8fafc99" },
        white: {
          A700_6c: "#ffffff6c",
          A700_0f: "#ffffff0f",
          A700_26: "#ffffff26",
          A700: "#ffffff",
        },
        blue_gray: { 100: "#cbd5e1", 300: "#94a3b8", 500: "#64748b" },
        blue: { A700: "#2563eb" },
        indigo: { 50: "#e2e8f0", "800_33": "#1d3a8a33" },
        light_blue: { A200: "#38bdf8" },
        teal: { 300: "#34d399" },
        green: { A700: "#24d063" },
        yellow: { 800: "#f5a722" },
        deep_purple: { A200: "#8b5cf6" },
        pink: { 300: "#ec4f9d" },
      },
      fontFamily: { inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#ffffff0f,#ffffff0f)",
        gradient1: "linear-gradient(180deg ,#ffffff26,#ffffff26)",
      },
      boxShadow: { bs: "-12px 25px  80px 0px #1d3a8a33" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
