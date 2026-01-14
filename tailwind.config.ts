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
      // Min-width breakpoints (default behavior)
      xs: "410px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "1.5xl": "1366px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2560px",

      // contained breakpoints

      "s-xs": { min: "1px", max: "409px" },
      "s-sm": { min: "1px", max: "639px" },
      "xs-sm": { min: "410px", max: "639px" },
      "sm-md": { min: "640px", max: "767px" },
      "md-lg": { min: "768px", max: "1023px" },
      "sm-lg": { min: "640px", max: "1023px" },
      "lg-xl": { min: "1024px", max: "1279px" },
      "lg-1.5xl": { min: "1024px", max: "1366px" },
      "md-2xl": { min: "768px", max: "1535px" },
      "lg-2xl": { min: "1024px", max: "1535px" },
      "xl-2xl": { min: "1280px", max: "1535px" },

      // Max-width breakpoints (reverse approach)
      "max-xs": { max: "410px" }, // For devices smaller than 450px, small mobiles iphones
      "max-sm": { max: "640px" }, // For devices smaller than 640px
      "max-md": { max: "768px" }, // For devices smaller than 768px
      "max-lg": { max: "1024px" }, // For devices smaller than 1024px
      "max-xl": { max: "1280px" }, // For devices smaller than 1280px
      "max-1.5xl": { max: "1366px" }, // For devices smaller than 1366px
      "max-2xl": { max: "1536px" }, // For devices smaller than 1536px
      "max-3xl": { max: "1920px" }, // For devices smaller than 1920px
      "max-4xl": { max: "2560px" }, // For devices smaller than 2560px
    },
    extend: {
      grayscale: {
        10: "10%",
        20: "20%",
        30: "30%",
        40: "40%",
        50: "50%",
      },
      fontFamily: {
        sans: ["var(--font-aeonik)"],
      },
      colors: {
        mycolors: {
          black: "#000000",
          white: "#F5F9EF",
          "sec-white": "#EFF3F9",
          grey: "#C5C5C3",
          blue: "#3375F5",
          "dark-grey": "#4C4C4C",
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
