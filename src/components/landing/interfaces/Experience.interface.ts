export interface ExpItem {
  id: string;
  title: string;
  company: string;
  period: string;
  current?: boolean;
  description?: string;
  bullets?: { strong?: string; text: string }[];
  tags: string[];
}

export interface EduItem {
  title: string;
  institution: string;
  period: string;
  description: string;
}