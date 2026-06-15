import './globals.css';

export const metadata = {
  title: 'Mission Board',
  description: "Troy's visual task board — all projects, agents, and the radar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
