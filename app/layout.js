import { Montserrat, Roboto_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono", 
  subsets: ["latin"],
});

export const metadata = {
  title: "Clixhora - One of the No.1 Digital Markerting Agency in Benguluru",
  description: "Clixhora is a digital marketing agency that helps businesses to grow their online presence and reach their target audience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${robotoMono.variable} antialiased`}   
      >
        {children}
      </body>
    </html>
  );
}
