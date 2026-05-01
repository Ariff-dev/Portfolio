import { FaCalendarAlt } from "react-icons/fa";

export const DateBadge = ({
  period,
  current,
}: {
  period: string;
  current?: boolean;
}) => (
  <div className="flex items-center gap-2 flex-wrap">
    {current && (
      <span
        className="text-xs font-semibold px-2 py-0.5 rounded-full"
        style={{
          backgroundColor: "var(--complementary)",
          color: "var(--background)",
        }}
      >
        Current
      </span>
    )}
    <span
      className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
      style={{
        backgroundColor: "var(--surface-elevated)",
        border: "1px solid var(--border)",
        color: "var(--text-muted)",
      }}
    >
      <FaCalendarAlt size={10} />
      {period}
    </span>
  </div>
);
