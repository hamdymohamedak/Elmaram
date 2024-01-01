import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "El-Maram Pharmacies",
  description: "Locate and find information about El Maram Pharmacies in Victoria, Alexandria, Egypt. Contact information such as telephones and address with a map showing and mobile app",
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
