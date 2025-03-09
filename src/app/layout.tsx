import type { Metadata } from "next";
import {Montserrat, Ubuntu } from "next/font/google"; // Importa Montserrat
import "./globals.css";
import Headbar from "../../components/headbar";

const montserrat = Montserrat({
  variable: "--font-montserrat", // Define la variable CSS
  subsets: ["latin"],
  weight: ["400", "700"], // Puedes agregar más pesos si los necesitas
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Unagi Sushi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${ubuntu.variable} antialiased`}>
        <Headbar />
        {children}
      </body>
    </html>
  );
}