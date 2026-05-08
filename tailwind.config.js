/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue"
  ],
  theme: {
    extend: {
      colors: {
        // ─── Paleta Burgundy (#6A0039) — Primary ───────────────────────────
        // Base HSL: H=328°, S=100%, L=21%
        burgundy: {
          50:  "#fff0f8",  // L=97%
          100: "#ffdbee",  // L=93%
          200: "#ffadd9",  // L=84%
          300: "#ff70bc",  // L=72%
          400: "#ff299b",  // L=58%
          500: "#e6007a",  // L=45%
          600: "#b3005f",  // L=35%
          700: "#8a0049",  // L=27%
          800: "#6a0039",  // L=21% ← brand color
          900: "#470026",  // L=14%
          950: "#33001b",  // L=10%
        },

        // ─── Paleta Teal (#3EB2B5) — Secondary ─────────────────────────────
        // Base HSL: H=182°, S=49%, L=48%
        teal: {
          50:  "#f4fbfb",  // L=97%
          100: "#e4f5f6",  // L=93%
          200: "#c2e9ea",  // L=84%
          300: "#95d8db",  // L=72%
          400: "#67c8cb",  // L=60%
          500: "#3eb2b5",  // L=48% ← brand color
          600: "#2c9396",  // L=38%
          700: "#1d6f72",  // L=28%
          800: "#125254",  // L=20%
          900: "#0a3738",  // L=13%
          950: "#062728",  // L=9%
        },

        // ─── Tokens semânticos — mapeados às paletas ────────────────────────
        // Outline
        "outline":                    "#887177",
        "outline-variant":            "#dbc0c7",

        // Primary → burgundy
        "primary":                    "#6a0039",  // burgundy-800
        "on-primary":                 "#ffffff",
        "primary-container":          "#8a0049",  // burgundy-700
        "on-primary-container":       "#ff70bc",  // burgundy-300
        "inverse-primary":            "#ffadd9",  // burgundy-200
        "primary-fixed":              "#fff0f8",  // burgundy-50
        "primary-fixed-dim":          "#ffdbee",  // burgundy-100
        "on-primary-fixed":           "#33001b",  // burgundy-950
        "on-primary-fixed-variant":   "#470026",  // burgundy-900

        // Secondary → teal
        "secondary":                  "#3eb2b5",  // teal-500
        "on-secondary":               "#ffffff",
        "secondary-container":        "#c2e9ea",  // teal-200
        "on-secondary-container":     "#1d6f72",  // teal-700
        "secondary-fixed":            "#e4f5f6",  // teal-100
        "secondary-fixed-dim":        "#95d8db",  // teal-300
        "on-secondary-fixed":         "#062728",  // teal-950
        "on-secondary-fixed-variant": "#0a3738",  // teal-900

        // Tertiary — Dark neutral
        "tertiary":                   "#1b1f1f",
        "on-tertiary":                "#ffffff",
        "tertiary-container":         "#303434",
        "on-tertiary-container":      "#999c9c",
        "tertiary-fixed":             "#e0e3e3",
        "tertiary-fixed-dim":         "#c4c7c7",
        "on-tertiary-fixed":          "#181c1d",
        "on-tertiary-fixed-variant":  "#35393a",

        // Error
        "error":                      "#ba1a1a",
        "on-error":                   "#ffffff",
        "error-container":            "#ffdad6",
        "on-error-container":         "#93000a",

        // Background
        "background":                 "#fff7fa",
        "on-background":              "#1e1a1d",
      },
      borderRadius: {
        "sm":      "0.25rem",
        "DEFAULT": "0.5rem",
        "md":      "0.75rem",
        "lg":      "1rem",
        "xl":      "1.5rem",
        "full":    "9999px",
      },
      spacing: {
        "xs":            "4px",
        "sm":            "8px",
        "md":            "16px",
        "lg":            "24px",
        "xl":            "48px",
        "gutter":        "24px",
        "container-max": "1280px",
      },
      fontFamily: {
        "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
        "headline-md": ["Plus Jakarta Sans", "sans-serif"],
        "body-lg":     ["Plus Jakarta Sans", "sans-serif"],
        "body-md":     ["Plus Jakarta Sans", "sans-serif"],
        "label-md":    ["Plus Jakarta Sans", "sans-serif"],
        "label-sm":    ["Plus Jakarta Sans", "sans-serif"],
        "button":      ["Plus Jakarta Sans", "sans-serif"],
      },
      fontSize: {
        "display":     ["48px", { lineHeight: "1.2",  fontWeight: "700", letterSpacing: "-0.02em" }],
        "headline-lg": ["32px", { lineHeight: "1.25", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "1.3",  fontWeight: "600" }],
        "body-lg":     ["18px", { lineHeight: "1.6",  fontWeight: "400" }],
        "body-md":     ["16px", { lineHeight: "1.6",  fontWeight: "400" }],
        "label-md":    ["14px", { lineHeight: "1.4",  fontWeight: "600", letterSpacing: "0.01em" }],
        "label-sm":    ["12px", { lineHeight: "1.4",  fontWeight: "500" }],
        "button":      ["16px", { lineHeight: "1.2",  fontWeight: "600" }],
      }
    }
  },
  plugins: [],
}
