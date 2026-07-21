import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Harpenin Studio - The Event Command Center",
  description: "The operating system for organizers who build experiences, not just crowds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} font-sans antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black`}>
        {children}
      </body>
    </html>
  );
}

