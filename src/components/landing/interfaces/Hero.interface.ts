import type { ReactNode } from "react";

export type TechCategory = "frontend" | "backend" | "database";

export interface Tech {
  name: string;
  icon: ReactNode;
  category: TechCategory;
}

export interface StatCardProps {
  value: string;
  label: string;
}

export interface SocialLinkProps {
  href: string;
  label: string;
  download?: boolean;
  external?: boolean;
  children: React.ReactNode;
}