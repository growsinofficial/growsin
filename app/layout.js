import { Questrial } from 'next/font/google'

import "@fonts/css/switzer.css";
import "./globals.css";

import "@fonts/font-awesome.min.css";

import "@css/plugins/bootstrap-grid.css";

import "@css/plugins/swiper.min.css";

import "@css/plugins/magnific-popup.css";

import Preloader from "@/layouts/Preloader";
import "@css/style.css";

const secondary_font = Questrial({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-secondary',
  display: 'swap',
  adjustFontFallback: false,
})

export const metadata = {
  title: "Growsin - Invest with Clarity.",
  description: "SEBI-registered investment advisory & research firm delivering personalised financial planning and portfolio solutions backed by data and independent research.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${secondary_font.variable}`}>
      <body>
        {/* <Preloader /> */}
        {children}
      </body>
    </html>
  );
}
