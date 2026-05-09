import type { Metadata } from 'next';
import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shriken Patel — Full-Stack & Mobile Engineer',
  description: 'Full-stack engineer building scalable web and mobile products. Specializing in React.js, Flutter, Node.js, AWS, and AI-integrated systems.',
  keywords: ['Shriken Patel', 'Full-Stack Developer', 'React', 'Flutter', 'Node.js', 'Software Engineer'],
  authors: [{ name: 'Shriken Patel' }],
  openGraph: {
    title: 'Shriken Patel — Full-Stack & Mobile Engineer',
    description: 'Full-stack engineer building scalable web and mobile products.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg text-text antialiased">
        {children}
      </body>
    </html>
  );
}
