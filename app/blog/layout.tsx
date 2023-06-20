import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Next',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
