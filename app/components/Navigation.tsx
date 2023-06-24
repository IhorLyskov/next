'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

export const Navigation = ({ navLinks }: Props) => {
  let pathname = usePathname();
  const session = useSession();

  const len = pathname.lastIndexOf('/');
  if (len) pathname = pathname.slice(0, len);
  const isActiveProfile = pathname === '/profile';

  return (
    <>
      {navLinks.map(link => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? 'active' : ''}
          >
            {link.label}
          </Link>
        );
      })}
      {session?.data && (
        <Link className={isActiveProfile ? 'active' : ''} href="/profile">
          Profile
        </Link>
      )}
      {session?.data ? (
        <Link href="#" onClick={() => signOut({ callbackUrl: '/' })}>
          Sign Out
        </Link>
      ) : (
        <Link href="/api/auth/signin">Sign In</Link>
      )}
    </>
  );
};
