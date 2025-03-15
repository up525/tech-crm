"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { ThemeProvider as NextThemeProvider } from "next-themes"
import { themes, type ThemeKey } from "@/lib/themes"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: string
}

type ThemeContextType = {
  theme: string
  setTheme: (theme: string) => void
  colorTheme: ThemeKey
  setColorTheme: (theme: ThemeKey) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function EnhancedThemeProvider({ children, defaultTheme = "dark" }: ThemeProviderProps) {
  const [colorTheme, setColorTheme] = useState<ThemeKey>("dark")

  // 应用主题色到CSS变量
  useEffect(() => {
    const selectedTheme = themes[colorTheme]

    // 设置CSS变量
    Object.entries(selectedTheme).forEach(([key, value]) => {
      if (key === "primary") {
        document.documentElement.style.setProperty("--primary", value)
        document.documentElement.style.setProperty("--chart-1", value.replace("#", ""))
      } else if (key === "secondary") {
        document.documentElement.style.setProperty("--secondary", value)
        document.documentElement.style.setProperty("--chart-2", value.replace("#", ""))
      } else if (key === "accent") {
        document.documentElement.style.setProperty("--accent", value)
        document.documentElement.style.setProperty("--chart-3", value.replace("#", ""))
      }
    })
  }, [colorTheme])

  return (
    <NextThemeProvider attribute="class" defaultTheme={defaultTheme} enableSystem disableTransitionOnChange>
      <ThemeContext.Provider
        value={{
          theme: defaultTheme,
          setTheme: () => {}, // 这将被next-themes覆盖
          colorTheme,
          setColorTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </NextThemeProvider>
  )
}

export const useEnhancedTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useEnhancedTheme must be used within a EnhancedThemeProvider")
  }
  return context
}

