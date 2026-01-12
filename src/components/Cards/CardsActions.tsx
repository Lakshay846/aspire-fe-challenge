import type { ActionIcon } from "../../types/cards.types";
import ActionIcons from "./ActionIcons";

type Action = {
  id: string;
  label: string;
  icon?: ActionIcon;
};

const ACTIONS: Action[] = [
  { id: "freeze", label: "Freeze card", icon: "freeze" },
  { id: "limit", label: "Set spend limit", icon: "limit" },
  { id: "gpay", label: "Add to GPay", icon: "gpay" },
  { id: "replace", label: "Replace card", icon: "replace" },
  { id: "cancel", label: "Cancel card", icon: "deactivate" },
];

export default function CardActions() {
  return (
    <div className="grid grid-cols-5 gap-4 rounded-xl bg-[#EDF3FF] p-4">
      {ACTIONS.map((action) => (
        <div
          key={action.id}
          className="flex cursor-pointer flex-col items-center gap-2 text-center text-xs text-gray-700"
        >
          {/* Icon placeholder */}
          <ActionIcons name={action.icon!} />

          <span className="font-medium">{action.label}</span>
        </div>
      ))}
    </div>
  );
}
