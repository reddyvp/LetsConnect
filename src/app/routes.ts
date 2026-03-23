import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { DiscoverPage } from './components/DiscoverPage';
import { MatchesPage } from './components/MatchesPage';
import { ChatPage } from './components/ChatPage';
import { ProfilePage } from './components/ProfilePage';
import { SignUpPage } from './components/auth/SignUpPage';
import { LoginPage } from './components/auth/LoginPage';

export const router = createBrowserRouter([
  { path: '/signup', Component: SignUpPage },
  { path: '/login', Component: LoginPage },
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: DiscoverPage },
      { path: 'matches', Component: MatchesPage },
      { path: 'chat/:matchId', Component: ChatPage },
      { path: 'profile', Component: ProfilePage },
    ],
  },
]);
