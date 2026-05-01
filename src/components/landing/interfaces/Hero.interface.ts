import type { ReactNode } from "react";

export type TechCategory = "frontend" | "backend" | "database";

export interface Tech {
  name: string;
  icon: ReactNode;
  category: TechCategory;
}