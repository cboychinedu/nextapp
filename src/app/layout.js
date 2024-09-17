// Importing the necessary modules 
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

// Configure the font object 
const poppins = Poppins({
  subsets: ['latin'], 
  display: 'swap', 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata = {
  title: "The next app",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
      {/* Adding the navbar header */}
      <Navbar /> 
        {children}
        
      </body>
    </html>
  );
}
