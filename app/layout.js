import { Montserrat, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });
const montserrat = Montserrat({subsets: ["latin"]})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunitoSans.className} overflow-x-hidden`}>
        <div className="w-screen bg-gray-50 z-50 h-24">
          <Navbar />
        </div>
          <div className=""> {children} </div>
        <div>
          <Footer /> 
        </div>
        </body>
    </html>
  );
}
