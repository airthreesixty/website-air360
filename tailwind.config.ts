import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  shortcuts: {
    container: "max-w-screen-[1400px] mx-auto px-6 lg:px-8",
    "container-lp": "max-w-screen-[1600px] mx-auto px-6 lg:px-8 xl:px-10",
    title1: "text-4xl text-black-600 lg:text-5xl xl:text-6xl",
    title2: "text-3xl text-black-600 lg:text-4xl xl:text-5xl",
    title3: "text-xl text-black-600 lg:text-2xl xl:text-3xl",
    textp: "text-[#818896] lg:text-lg xl:text-xl xl:leading-8",
    "shadow-card": "shadow-[0_0_16px_rgba(36,42,42,0.1)] border-none",
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
      },
    },
    extend: {
      fontWeight: {
        "extra-bold": "800",
        black: "900",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "Arial", "Helvetica", "sans-serif"],
        really: ["var(--font-really)", "sans-serif"],
        noto: ["var(--font-noto)", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            letterSpacing: "0.025rem",
            p: {
              a: {
                "text-decoration": "none",
                color: "#6278DF",
              },
            },
            a: {
              "text-decoration": "none",
              "word-break": "break-all",
              color: "#6278DF",
              strong: {
                color: "#6278DF",
              },
            },
            maxWidth: "100%",
            ul: {
              li: {
                "&:before": {
                  backgroundColor: "#6b7280",
                },
                paddingLeft: "1.5em",
                a: {
                  color: "#6278DF",
                },
              },
            },
            color: "#374151",
            h1: {
              color: "#374151",
              fontSize: "36px !important",
            },
            h2: {
              a: {
                color: "#374151",
                fontWeight: "bold",
                "word-break": "normal",
              },
            },
            h3: {
              a: {
                color: "#374151",
                fontWeight: "bold",
                "word-break": "normal",
              },
            },
            h4: {
              fontSize: "18px",
              fontWeight: "bold",
              borderLeft: "5px solid #e74b91",
              paddingLeft: "10px",
              a: {
                color: "#374151",
                fontWeight: "bold",
                "word-break": "normal",
              },
            },
          },
        },
      },
      colors: {
        primary: {
          "100": "#FCE9F2",
          "600": "#e74b91",
          "700": "#ce3077",
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          "100": "#f4f5fa",
          "200": "#dbe1f8",
          "600": "#9a9cbf",
          "700": "#7068bf",
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: {
          "600": "#2C7BE5",
          "700": "#2470d6",
        },
        blue: {
          "100": "#F0F6FF",
          "200": "#B1D1FF",
          "300": "#6EA8FE",
          "400": "#3C8BFF",
          "500": "#0D6EFD",
          "600": "#0C63E4",
        },
        red: {
          "50": "#FDEDED",
          "100": "#FBDBDB",
          "200": "#F7BBBB",
          "300": "#F29797",
          "400": "#EE7777",
          "500": "#EA5455",
          "600": "#E31C1C",
          "700": "#A81515",
          "800": "#720E0E",
          "900": "#360707",
        },
        green: {
          "50": "#EAFBF1",
          "100": "#D0F6E1",
          "200": "#A6EDC6",
          "300": "#77E4A8",
          "400": "#4DDB8D",
          "500": "#28C76F",
          "600": "#20A15A",
          "700": "#187743",
          "800": "#10512D",
          "900": "#082615",
        },
        orange: {
          "50": "#FFF4EB",
          "100": "#FFEDDB",
          "200": "#FFD7B3",
          "300": "#FFC58F",
          "400": "#FFB066",
          "500": "#FF9F43",
          "600": "#FF7B00",
          "700": "#C25E00",
          "800": "#803E00",
          "900": "#422000",
        },
        cyan: {
          "50": "#E5FCFF",
          "100": "#C7F9FF",
          "200": "#8FF4FF",
          "300": "#57EEFF",
          "400": "#1FE9FF",
          "500": "#00CFE8",
          "600": "#00A5B8",
          "700": "#007C8A",
          "800": "#00535C",
          "900": "#00292E",
        },
        black: {
          "100": "#6E84A3",
          "200": "#4B4B4B",
          "600": "#374151",
        },
        purple: {
          "600": "#BF45A8",
        },
        blossom: {
          "600": "#644AD5",
        },
        gray: {
          "75": "#F7F9FC",
          "450": "#818896",
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
      },
      zIndex: {
        "1": "1",
        "60": "60",
        "100": "100",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "8xl": "4rem",
      },
      screens: {
        "1400": "1400px",
        "1600": "1600px",
      },
      width: {
        "16": "4rem",
        "18": "4.5rem",
        "35": "8.75rem",
        "50": "12.5rem",
        "85vw": "85vw",
        "75": "18.75rem",
        "50vh": "50vh",
        "70vh": "70vh",
      },
      height: {
        "18": "4.5rem",
        "35": "8.75rem",
        "50": "12.5rem",
        "70": "17.5rem",
        "74": "18.5rem",
        "100": "25rem",
        "85vh": "85vh",
        "7.5": "1.875rem",
        "9.5": "2.375rem",
        "10": "2.5rem",
        "11": "2.75rem",
        "28": "7rem",
        "70vh": "70vh",
        "50vh": "50vh",
      },
      minHeight: {
        "85vh": "85vh",
      },
      margin: {
        "15": "3.75rem",
        "35": "8.75rem",
        "100": "25rem",
        "28": "7rem",
      },
      inset: {
        "5": "1.25rem",
        "30": "7.5rem",
        "4.5": "1.125rem",
        "18": "4.5rem",
        "25": "6.25rem",
        "28": "7rem",
        "31": "7.75rem",
        "32vh": "32vh",
        "35": "8.75rem",
      },
      spacing: {
        "10": "2.5rem",
        "11": "2.75rem",
        "15": "3.75rem",
        "18": "4.5rem",
        "25": "6.25rem",
        "28": "7rem",
      },
      textShadow: {
        white: "0px 0px 14px rgba(255, 255, 255, 0.7)",
        primary: "0px 0px 14px rgba(231, 75, 145, 0.5)",
      },
      dropShadow: {
        white: "0px 0px 14px rgba(255, 255, 255, 0.7)",
        primary: "0px 0px 14px rgba(231, 75, 145, 0.5)",
        black: "0px 0px 14px rgba(0, 0, 0, 0.5)",
      },
      boxShadow: {
        primary: "0 0 0 2px rgba(231,75,145,1), 8px 8px 0 0 rgba(231,75,145,1)",
        gray: "0 0 0 2px rgba(156,163,175,1), 8px 8px 0 0 rgba(156,163,175,1)",
        menu: "0px 2px 5px 0px rgba(60, 64, 67, 0.16)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("./src/plugins/button"),
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};
export default config;
