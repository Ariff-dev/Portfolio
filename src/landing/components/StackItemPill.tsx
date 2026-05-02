import { STACK_LEVEL_CONFIG } from "../config/stackLevelconfig";
import type { Level, StackItem } from "../interfaces";

export const StackItemPill = ({
  item,
  level,
}: {
  item: StackItem;
  level: Level;
}) => (
  <div
    className="stack-pill"
    style={{ color: STACK_LEVEL_CONFIG[level].color }}
  >
    {item.icon}
    <span className="stack-pill__name">
      {item.name}
      {item.context && (
        <span className="stack-pill__context"> ({item.context})</span>
      )}
    </span>
  </div>
);
