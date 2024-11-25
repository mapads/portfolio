import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // extend: {
    //   colors: {
    //     background: "var(--background)",
    //     foreground: "var(--foreground)",
    //   },
    // },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),],
  daisyui: {
    themes: [
      "light", // Enable the light theme
      "dark",  // Enable the dark theme
      "synthwave", // Example of additional theme
    ],
    darkTheme: "dark", // Optional: set default dark mode theme
  },
} satisfies Config;
