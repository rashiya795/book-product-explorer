import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
             <Navbar />
             {children} 
             <Footer/>
      </body>
    </html>
  );
}


