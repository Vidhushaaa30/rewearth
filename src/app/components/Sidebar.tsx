import { Link, useLocation } from 'react-router-dom';
import { Home, Shirt, Repeat2, Leaf, Sparkles, CalendarDays } from 'lucide-react';

export function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/wardrobe', icon: Shirt, label: 'My Wardrobe' },
    { path: '/swapify', icon: Repeat2, label: 'Swapify' },
    { path: '/impact', icon: Leaf, label: 'Impact' },
    { path: '/green-alternatives', icon: Sparkles, label: 'Green Alternatives' },

    // ✅ NEW SECTION: Exchange Fest (UI only)
    { path: '/exchange-fest', icon: CalendarDays, label: 'Exchange Fest' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-sidebar-border bg-sidebar px-4 py-6">
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
            <Leaf className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-semibold text-foreground">RewEarth</h1>
        </div>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors ${
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
