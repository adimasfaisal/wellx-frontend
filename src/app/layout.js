import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./providers";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WellX",
  description: "Talent Allocation Assistant",
  icons: {
    icon: "./wellx-logo.png",
    shortcut: "./wellx-logo.png",
    apple: "./wellx-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
