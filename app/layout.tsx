import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/main-navigation";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Anni Keskipoikela",
  description: "Annin taideportfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <MainNav />

        {children}

        <Footer />
      </body>
    </html>
  );
}
