import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary": "#F3EDDC",
      "brown-100": "#482E1D",
      "brown-50": "#895D2B",
      "brown-25": "#A3966A",
      "brick": "#8D451C",
      "blue": "#7E9CF0",
      "green": "#C3E78C"
    },
    extend: {
      fontFamily: {
        "zodiak-italic": ["ZodiakItalic"],
        "zodiak-light": ["ZodiakLight"],
        "zodiak-light-italic": ["ZodiakLightItalic"],
        "zodiak-regular": ["ZodiakRegular"],
        "zodiak-bold": ["ZodiakBold"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
