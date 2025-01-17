import "./globals.css";
import type { Metadata } from "next";

import "tw-elements-react/dist/css/tw-elements-react.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Header from "./components/Header";
import BottomHeader from "./components/BottomHeader";
import Footer from "./components/Footer";
import ReduxProvider from "./components/ReduxProvider";

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
    <ReduxProvider>
      <html lang="en">
        <body className="font-bodyFont bg-gray-300">
          <Header />
          <BottomHeader />
          {children}
          <Footer />
        </body>
      </html>
    </ReduxProvider>
  );
}
