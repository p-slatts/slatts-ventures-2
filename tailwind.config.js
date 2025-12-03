module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(0, 0%, 80%)",
        input: "hsl(0, 0%, 80%)",
        ring: "hsl(228, 45%, 37%)",
        background: "hsl(0, 0%, 93%)",
        foreground: "hsl(0, 0%, 0%)",
        primary: {
          DEFAULT: "hsl(228, 45%, 37%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        secondary: {
          DEFAULT: "hsl(0, 0%, 93%)",
          foreground: "hsl(0, 0%, 0%)",
        },
        muted: {
          DEFAULT: "hsl(0, 0%, 93%)",
          foreground: "hsl(0, 0%, 50%)",
        },
        accent: {
          DEFAULT: "hsl(228, 45%, 37%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(0, 0%, 0%)",
        },
        surface: "hsl(0, 0%, 100%)",
        link: {
          DEFAULT: "hsl(228, 45%, 37%)",
          hover: "hsl(228, 45%, 30%)",
        },
        text: {
          primary: "hsl(0, 0%, 0%)",
          secondary: "hsl(0, 0%, 30%)",
        },
        success: "hsl(120, 50%, 50%)",
        error: "hsl(0, 50%, 50%)",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      fontSize: {
        h1: ["24px", { lineHeight: "1.4", letterSpacing: "0" }],
        h2: ["24px", { lineHeight: "1.4" }],
        body: ["16px", { lineHeight: "1.5" }],
        small: ["14px", { lineHeight: "1.4" }],
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
        '48': '12rem',
        '64': '16rem',
      },
      borderRadius: {
        lg: "8px",
        md: "4px",
        sm: "2px",
      },
      backgroundImage: {
        'hero-gradient': "linear-gradient(to bottom, hsl(0, 0%, 100%) 0%, hsl(210, 100%, 92%) 50%, hsl(0, 0%, 93%) 100%)",
        'button-gradient': "linear-gradient(90deg, hsl(228, 45%, 37%) 0%, hsl(228, 45%, 30%) 100%)",
      },
    },
  },
  plugins: [],
}
