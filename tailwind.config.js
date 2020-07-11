const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        headline: ["IBM Plex Serif"]
      },
    },
  },
  plugins: [
    require("@tailwindcss/ui")({
      layout: "sidebar",
    }),
    require("autoprefixer"),
  ],
  purge: [
    "index.html"
  ],
};