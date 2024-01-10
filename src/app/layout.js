import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ElMaram Pharmacies",
  description: "El Maram Pharmacies",
};

export default function RootLayout({ children }) {
  return (
    <html className="html" lang="en">
      <body id="body" className={inter.className}>
        {children}
      </body>
    </html>
  );
}
