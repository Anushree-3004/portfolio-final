import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anushree Patel | Portfolio (Issue 01)',
  description: 'Graphic Designer specializing in Brand Identity and Visual Storytelling',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-portfolio-bg text-portfolio-dark">
        {children}
      </body>
    </html>
  );
}
