/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: "var(--font-geist-sans), sans-serif",
        mono: "var(--font-geist-mono), monospace",
        lexend: "var(--font-lexend), monospace",
        josefin: "var(--font-josefin), sans-serif",
      },
    //   fontSize: {
    //   xs: ['0.75rem', '1rem'],
    //   sm: ['0.875rem', '1.5rem'],
    //   base: ['1rem', '1.75rem'],
    //   lg: ['1.125rem', '2rem'],
    //   xl: ['1.25rem', '2rem'],
    //   '2xl': ['1.5rem', '2rem'],
    //   '3xl': ['2rem', '2.5rem'],
    //   '4xl': ['2.5rem', '3.5rem'],
    //   '5xl': ['3rem', '3.5rem'],
    //   '6xl': ['3.75rem', '1'],
    //   '7xl': ['4.5rem', '1.1'],
    //   '8xl': ['6rem', '1'],
    //   '9xl': ['8rem', '1'],
    // },
    //   borderRadius: {
    //   '4xl': '2rem',
    // },
      colors: {
        profile: "oklch(var(--profile))", /* custom */
        text: "oklch(var(--text))", /* custom */
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring))",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary))",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary))",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive))",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted))",
          foreground: "oklch(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "oklch(var(--accent))",
          foreground: "oklch(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('dark', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `:is(.dark .${className})`
        })
      })
    },
    require("tailwindcss-animate")]
};
