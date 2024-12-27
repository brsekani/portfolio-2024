import { Varela_Round, Geist_Mono } from "next/font/google";
import "./globals.css";

const varela = Varela_Round({
  weight: "400",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lawal Temidayo Portfolio",
  description: "The best frontend developer in town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${varela.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
