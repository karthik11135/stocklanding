import type { Metadata } from "next";
import "./globals.css";
import {Roboto_Condensed} from 'next/font/google'

const rc = Roboto_Condensed({
  weight: ["100", "200", "300", "400", "600", "800"],
  subsets: ['latin']
})


export const metadata: Metadata = {
  title: "InvestoGraphy",
  description: "NextJS developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rc.className} min-h-screen bg-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
