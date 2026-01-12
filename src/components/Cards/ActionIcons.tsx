import { ACTION_ICONS } from "./Icons/cards.icons";
import type { ActionIcon } from "../../types/cards.types";

type Props = {
  name: ActionIcon;
};

export default function ActionIcons({ name }: Props) {
  return (
    <div className="h-8 w-8 rounded-full">
      <img
        src={ACTION_ICONS[name]}
        alt=""
        className={`h-8 w-8`}
      />
    </div>
  );
}
