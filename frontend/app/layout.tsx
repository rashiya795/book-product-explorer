// import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./Components/Navbar";
import "./globals.css";
import HomePage from "./Components/HomePage";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
             <Navbar />

            <HomePage/>
           

            
          {children}
     
       
       
      </body>
    </html>
  );
}
