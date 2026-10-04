import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Tula's International School | The Modern Gurukul",
  description: 'A modern, animated homepage concept for Tula\'s International School, Dehradun.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
