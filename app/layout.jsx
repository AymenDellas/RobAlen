import "./globals.css";

export const metadata = {
  title:
    "Strategic divorce coaching — Keep your judgment clear and your work steady",
  description:
    "Strategic coaching for men 30 and over going through divorce: keep judgment clear and work steady while the process runs. Book a discovery call.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
