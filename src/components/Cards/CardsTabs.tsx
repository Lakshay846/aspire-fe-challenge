type Tab = {
    id: string;
    label: string;
    active?: boolean;
  };
  
  const TABS: Tab[] = [
    { id: 'my-cards', label: 'My debit cards', active: true },
    { id: 'all-cards', label: 'All company cards' },
  ];
  
  export default function CardsTabs() {
    return (
      <div className="flex gap-6 border-gray-200">
        {TABS.map((tab) => (
          <div
            key={tab.id}
            className={`cursor-pointer pb-2 text-sm ${
              tab.active
                ? 'border-b-2 border-[#23CEFD] text-gray-900 font-medium'
                : 'text-[#222222] text-opacity-30'
            }`}
          >
            {tab.label}
          </div>
        ))}
      </div>
    );
  }
  