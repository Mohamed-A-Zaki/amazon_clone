import "./globals.css";
import type { Metadata } from "next";

import "tw-elements-react/dist/css/tw-elements-react.min.css";

export const metadata: Metadata = {
  title: "Amazon Clone",
  description: "Amazon Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
