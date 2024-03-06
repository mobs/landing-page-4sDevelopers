import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Script from "next/script";
import { FaWhatsapp } from "react-icons/fa";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "4S Developers",
  description: "A website to showcase properties of 4S Developers in Gurugram and Delhi NCR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WXMSLXFV')`,
          }}
        />
      </head>
      <body className={`${nunitoSans.className} overflow-x-hidden`}>
        <div className="w-screen bg-gray-50 z-50 h-24">
          <Navbar />
        </div>
        <div className=""> {children} </div>
        <div className="fixed md:bottom-16 bottom-16 md:right-16 right-[2rem] flex flex-col gap-8 z-40">
          <Link href={`https://api.whatsapp.com/send?phone=918826677393`}>
            <FaWhatsapp className="text-6xl text-green-700" />
          </Link>
        </div>
        <div>
          <Footer />
        </div>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WXMSLXFV"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
      </body>
    </html>
  );
}
