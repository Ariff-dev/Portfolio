import { useState, useEffect } from "react";

type Theme = "dark" | "light";

const getInitialTheme = (): Theme => {
  try {
    const saved = localStorage.getItem("portfolio-theme") as Theme | null;
    if (saved === "dark" || saved === "light") return saved;
  } catch { /* ignore */ }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches !== false
    ? "dark"
    : "light";
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
    try { localStorage.setItem("portfolio-theme", theme); } catch { /* ignore */ }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return { theme, toggle };
};
