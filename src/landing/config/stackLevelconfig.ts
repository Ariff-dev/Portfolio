import type { Level } from "../interfaces";

export const STACK_LEVEL_CONFIG: Record<
  Level,
  { bg: string; color: string; border: string; dot: string }
> = {
  primary: {
    bg: "var(--complementary)",
    color: "var(--background)",
    border: "transparent",
    dot: "var(--complementary)",
  },
  mid: {
    bg: "var(--surface-elevated)",
    color: "var(--secondary)",
    border: "var(--border)",
    dot: "var(--secondary)",
  },
  learning: {
    bg: "var(--surface)",
    color: "var(--text-muted)",
    border: "var(--border)",
    dot: "var(--text-muted)",
  },
};