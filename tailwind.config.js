/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          900: "rgb(13 13 15 / <alpha-value>)",
          800: "rgb(18 18 20 / <alpha-value>)",
          700: "rgb(26 26 30 / <alpha-value>)",
          600: "rgb(36 36 40 / <alpha-value>)",
          500: "rgb(46 46 51 / <alpha-value>)"
        },
        ink: "rgb(245 245 245 / <alpha-value>)",
        accent: {
          400: "rgb(255 70 70 / <alpha-value>)",
          500: "rgb(232 51 51 / <alpha-value>)",
          600: "rgb(198 39 39 / <alpha-value>)"
        }
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        body: ["Archivo", "system-ui", "sans-serif"],
        poster: ["Shrikhand", "Pilowlava Atome", "Pilowlava", "Bowlby One SC", "Bebas Neue", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
        script: ["Caveat", "Comic Sans MS", "cursive"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(232,51,51,0.35), 0 18px 40px rgba(232,51,51,0.25)",
        card: "0 18px 40px rgba(0,0,0,0.45)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
