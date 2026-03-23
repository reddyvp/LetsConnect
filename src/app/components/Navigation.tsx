import { NavLink } from 'react-router';
import { Flame, MessageCircle, User } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="bg-white border-t shadow-lg">
      <div className="flex justify-around items-center h-16 max-w-2xl mx-auto">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-colors ${
              isActive
                ? 'text-pink-500'
                : 'text-gray-400 hover:text-gray-600'
            }`
          }
        >
          <Flame className="w-6 h-6" />
          <span className="text-xs">Discover</span>
        </NavLink>

        <NavLink
          to="/matches"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-colors ${
              isActive
                ? 'text-pink-500'
                : 'text-gray-400 hover:text-gray-600'
            }`
          }
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs">Matches</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-colors ${
              isActive
                ? 'text-pink-500'
                : 'text-gray-400 hover:text-gray-600'
            }`
          }
        >
          <User className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </NavLink>
      </div>
    </nav>
  );
}
