import { STACK_LEVEL_CONFIG } from "../config/stackLevelconfig";
import type { Level } from "../interfaces";

export const LevelBadge = ({
  level,
  label,
}: {
  level: Level;
  label: string;
}) => {
  const cfg = STACK_LEVEL_CONFIG[level];
  return (
    <span
      className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
      style={{
        backgroundColor: cfg.bg,
        color: cfg.color,
        border: `1px solid ${cfg.border}`,
      }}
    >
      {label}
    </span>
  );
};
