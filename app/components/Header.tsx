import { Navigation } from './Navigation';

const navItems = [
  { label: 'Home', href: '/', session: false },
  { label: 'Blog', href: '/blog', session: true },
  { label: 'About', href: '/about', session: false },
  { label: 'Profile', href: '/profile', session: true },
];
export const TheHeader = () => {
  return (
    <header>
      <Navigation navLinks={navItems} />
    </header>
  );
};
