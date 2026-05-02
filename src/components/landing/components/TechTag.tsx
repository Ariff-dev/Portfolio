export const TechTag = ({ label }: { label: string }) => (
  <span
    className="text-xs font-medium px-2.5 py-1 rounded-full"
    style={{
      backgroundColor: "var(--surface-elevated)",
      border: "1px solid var(--border)",
      color: "var(--secondary)",
    }}
  >
    {label}
  </span>
);
