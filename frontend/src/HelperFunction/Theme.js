// Professional Theme Configuration for Student Management System

const colors = {
  // Primary brand colors
  primary: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },

  // Secondary colors
  secondary: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
  },

  // Neutral grays
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },

  // Status colors
  success: {
    50: "#ecfdf5",
    100: "#d1fae5",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
  },

  error: {
    50: "#fef2f2",
    100: "#fee2e2",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
  },

  warning: {
    50: "#fffbeb",
    100: "#fef3c7",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
  },

  info: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
  },
};

// Typography scale
const typography = {
  fontFamily: {
    sans: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Helvetica Neue",
      "sans-serif",
    ],
    mono: ["SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "monospace"],
  },
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};

// Spacing scale
const spacing = {
  px: "1px",
  0: "0",
  1: "0.25rem", // 4px
  2: "0.5rem", // 8px
  3: "0.75rem", // 12px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  8: "2rem", // 32px
  10: "2.5rem", // 40px
  12: "3rem", // 48px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
  32: "8rem", // 128px
};

// Border radius
const borderRadius = {
  none: "0",
  sm: "0.125rem", // 2px
  md: "0.375rem", // 6px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  "3xl": "1.5rem", // 24px
  full: "9999px",
};

// Shadows
const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  none: "none",
};

// Light theme
const lightTheme = {
  name: "light",
  colors: {
    // Primary
    primary: colors.primary[500],
    primaryHover: colors.primary[600],
    primaryLight: colors.primary[100],

    // Background
    background: colors.gray[50],
    backgroundSecondary: colors.gray[100],
    surface: "#ffffff",
    surfaceSecondary: colors.gray[50],

    // Text
    text: colors.gray[900],
    textSecondary: colors.gray[600],
    textMuted: colors.gray[500],
    textInverse: "#ffffff",

    // Borders
    border: colors.gray[200],
    borderSecondary: colors.gray[300],

    // Status
    success: colors.success[500],
    error: colors.error[500],
    warning: colors.warning[500],
    info: colors.info[500],

    // Interactive
    link: colors.primary[600],
    linkHover: colors.primary[700],
  },
  typography,
  spacing,
  borderRadius,
  shadows,
};

// Dark theme
const darkTheme = {
  name: "dark",
  colors: {
    // Primary
    primary: colors.primary[400],
    primaryHover: colors.primary[300],
    primaryLight: colors.primary[900],

    // Background
    background: colors.gray[900],
    backgroundSecondary: colors.gray[800],
    surface: colors.gray[800],
    surfaceSecondary: colors.gray[700],

    // Text
    text: colors.gray[100],
    textSecondary: colors.gray[300],
    textMuted: colors.gray[400],
    textInverse: colors.gray[900],

    // Borders
    border: colors.gray[700],
    borderSecondary: colors.gray[600],

    // Status
    success: colors.success[400],
    error: colors.error[400],
    warning: colors.warning[400],
    info: colors.info[400],

    // Interactive
    link: colors.primary[400],
    linkHover: colors.primary[300],
  },
  typography,
  spacing,
  borderRadius,
  shadows,
};

// Theme utilities
const createTheme = (theme) => ({
  ...theme,
  utils: {
    // Helper function to create rgba colors
    rgba: (color, alpha) => {
      const hex = color.replace("#", "");
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    },

    // Helper function for responsive breakpoints
    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    // Helper function for transitions
    transition: {
      fast: "all 0.15s ease",
      normal: "all 0.25s ease",
      slow: "all 0.35s ease",
    },
  },
});

const enhancedLightTheme = createTheme(lightTheme);
const enhancedDarkTheme = createTheme(darkTheme);

export {
  enhancedLightTheme as lightTheme,
  enhancedDarkTheme as darkTheme,
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
};
