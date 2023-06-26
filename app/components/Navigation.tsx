'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

type NavLink = {
  label: string;
  href: string;
  session: boolean;
};

type Props = {
  navLinks: NavLink[];
};

export const Navigation = ({ navLinks }: Props) => {
  let pathname = usePathname();
  const session = useSession();
  console.log(session);
  const len = pathname.lastIndexOf('/');
  if (len) pathname = pathname.slice(0, len);
  const isActiveProfile = pathname === '/profile';

  return (
    <>
      {navLinks.map(link => {
        const isActive = pathname === link.href;
        return (
          (!link.session || (link.session && session?.data)) && (
            <Link
              key={link.label}
              href={link.href}
              className={isActive ? 'active' : ''}
            >
              {link.label}
            </Link>
          )
        );
      })}
      {session?.data ? (
        <Link href="#" onClick={() => signOut({ callbackUrl: '/' })}>
          SignOut
        </Link>
      ) : (
        <Link href="/api/auth/signin">SignIn</Link>
      )}
    </>
  );
};
