import { SIDEBAR_ICONS } from './sidebar.icons';
import type { NavIcon } from '../../types/sidebar.types';

type Props = {
  name: NavIcon;
  active?: boolean;
};

export default function SidebarIcon({ name,active }: Props) {
  return (
    <img
      src={SIDEBAR_ICONS[name]}
      alt=""
      className={`h-[1.5rem] w-[1.5rem] ${
        active ? 'filter-green' : 'filter-white/40'
      }`}
    />
  );
}
