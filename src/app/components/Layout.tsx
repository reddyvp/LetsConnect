import { Outlet, useLocation } from 'react-router';
import { Navigation } from './Navigation';

export function Layout() {
  const location = useLocation();
  const hideNav = location.pathname.startsWith('/chat/');

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Outlet />
      {!hideNav && <Navigation />}
    </div>
  );
}
