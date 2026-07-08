// app/layout.js
import "./globals.css";

export const metadata = {
  title: 'Zoe Farming Ltd',
  description: 'Cultivating Quality, Growing Opportunities',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body>{children}</body>
    </html>
  );
}
