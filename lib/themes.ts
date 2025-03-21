export const themes = {
  dark: {
    primary: "#0070f3",
    secondary: "#6366f1",
    accent: "#10b981",
    background: "#0f0f0f",
    foreground: "#ffffff",
    card: "#1a1a1a",
    border: "#333333",
    muted: "#2a2a2a",
    "muted-foreground": "#888888",
  },
  light: {
    primary: "#0070f3",
    secondary: "#6366f1",
    accent: "#10b981",
    background: "#ffffff",
    foreground: "#0f0f0f",
    card: "#f9f9f9",
    border: "#e5e5e5",
    muted: "#f1f1f1",
    "muted-foreground": "#737373",
  },
  purple: {
    primary: "#8b5cf6",
    secondary: "#6366f1",
    accent: "#10b981",
    background: "#0f0f0f",
    foreground: "#ffffff",
    card: "#1a1a1a",
    border: "#333333",
    muted: "#2a2a2a",
    "muted-foreground": "#888888",
  },
  green: {
    primary: "#10b981",
    secondary: "#6366f1",
    accent: "#0070f3",
    background: "#0f0f0f",
    foreground: "#ffffff",
    card: "#1a1a1a",
    border: "#333333",
    muted: "#2a2a2a",
    "muted-foreground": "#888888",
  },
  red: {
    primary: "#ef4444",
    secondary: "#6366f1",
    accent: "#10b981",
    background: "#0f0f0f",
    foreground: "#ffffff",
    card: "#1a1a1a",
    border: "#333333",
    muted: "#2a2a2a",
    "muted-foreground": "#888888",
  },
}

export type ThemeKey = keyof typeof themes

