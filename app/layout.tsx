import type { Metadata } from 'next';
import './globals.css';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-bg text-text antialiased">
        {children}
      </body>
    </html>
  );
}
