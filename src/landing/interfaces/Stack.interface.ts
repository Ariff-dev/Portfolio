import type { ReactNode } from "react";


export type Level = "primary" | "mid" | "learning";

export interface StackItem {
  name: string;
  icon: ReactNode;
  context?: string;
}

export interface StackCategory {
  label: string;
  items: StackItem[];
}

export interface StackGroup {
  id: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
  level: Level;
  levelLabel: string;
  categories: StackCategory[];
}