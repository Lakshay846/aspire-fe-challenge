import type { FC } from 'react';
import Logo from "../../assets/Logo.svg";
import type { NavIcon } from '../../types/sidebar.types';
import SidebarIcon from './SidebarIcon';

type NavItem = {
  id: string;
  label: string;
  active?: boolean;
  icon: NavIcon;
};

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'cards', label: 'Cards', icon: 'card', active: true },
  { id: 'payments', label: 'Payments', icon: 'payments' },
  { id: 'credit', label: 'Credit', icon: 'credit' },
  { id: 'settings', label: 'Settings', icon: 'settings' }
];

const Sidebar: FC = () => {
  return (
    <aside className="w-1/4 min-h-screen bg-[#0C365A] text-white flex flex-col px-16 py-16">
      <div className="mb-10">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Aspire Logo" className="aspire-logo" />
        </div>
        <p className="mt-4 text-sm text-white/30 leading-relaxed">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <NavLink label={item.label} active={item.active} icon={item.icon}/>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

type NavLinkProps = {
  label: string;
  active?: boolean;
  icon: NavIcon;
};

const NavLink: FC<NavLinkProps> = ({ label, active, icon }) => {
  return (
    <div
      className={`flex items-center gap-3 cursor-pointer rounded-lg py-2 transition
        ${active ? 'text-green-400' : 'text-white/80 hover:text-white'}
      `}
    >
      <SidebarIcon name={icon} active={active} />
      <span className="font-medium">{label}</span>
    </div>
  );
};
