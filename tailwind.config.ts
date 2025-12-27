/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  // darkMode: ["class", '[data-theme="dark"]'], // Enable dark mode via class or data-theme attribute
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "1.5xl": "1366px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2560px",
      "max-xs": {
        max: "420px",
      },
      "max-sm": {
        max: "640px",
      },
      "max-md": {
        max: "768px",
      },
      "max-lg": {
        max: "1024px",
      },
      "max-xl": {
        max: "1280px",
      },
      "max-1.5xl": {
        max: "1366px",
      },
      "max-2xl": {
        max: "1536px",
      },
      "max-3xl": {
        max: "1920px",
      },
      "max-4xl": {
        max: "2560px",
      },
    },
    extend: {
      grayscale: {
        10: "10%",
        20: "20%",
        30: "30%",
        40: "40%",
        50: "50%",
      },
      colors: {
        mycolors: {
          black: "#000000",
          white: "#F5F9EF",
          "sec-white": "#EFF3F9",
          grey: "#C5C5C3",
          blue: "#3375F5",
          "dark-grey": "#636362",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        scroll: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-870%)",
          },
        },
      },
      animation: {
        scroll: "scroll 7s linear infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
