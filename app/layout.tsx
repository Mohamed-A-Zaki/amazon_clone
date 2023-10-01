import "./globals.css";
import type { Metadata } from "next";

import "tw-elements-react/dist/css/tw-elements-react.min.css";

import Header from "./components/Header";
import BottomHeader from "./components/BottomHeader";
import Footer from "./components/Footer";

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
      <body className="font-bodyFont">
        <Header />
        <BottomHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
