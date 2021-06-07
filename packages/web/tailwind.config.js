module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: false,
  theme: {
    colors: {
      "gray-100": "var(--color-gray-100)",
      "gray-200": "var(--color-gray-200)",
      "gray-300": "var(--color-gray-300)",
      "gray-700": "var(--color-gray-700)",
      "gray-800": "var(--color-gray-800)",
      "gray-900": "var(--color-gray-900)",
      primary: "var(--color-primary)",
      "faint-primary": "var(--color-faint-primary)",
      "white-primary": "var(--color-white-primary)",
    },
    fontFamily: {
      sans: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      body: [
        "DM Sans",
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
    spinner: () => ({
      default: {
        color: "var(--color-gray-100)",
        size: "1em",
        border: "2px",
        speed: "500ms",
      },
      md: {
        color: "var(--color-gray-100)",
        size: "1.5em",
        border: "2px",
        speed: "500ms",
      },
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-spinner")({
      className: "spinner",
      themeKey: "spinner",
    }),
  ],
};
