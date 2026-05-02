import type { StatCardProps } from "../interfaces";

export const StatCard = ({ value, label }: StatCardProps) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "10px 18px",
      borderRadius: "10px",
      backgroundColor: "var(--surface)",
      border: "1px solid var(--border)",
      minWidth: "76px",
      gap: "2px",
    }}
  >
    <span
      style={{
        fontSize: "1.125rem",
        fontWeight: 700,
        color: "var(--primary)",
        lineHeight: 1.2,
        whiteSpace: "nowrap",
      }}
    >
      {value}
    </span>
    <span
      style={{
        fontSize: "0.625rem",
        color: "var(--text-muted)",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
      }}
    >
      {label}
    </span>
  </div>
);
