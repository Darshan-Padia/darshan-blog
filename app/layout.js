import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Head from "next/head";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Darshan's Blogging Site",
    description: "Made with ❤️ By Darshan",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Script
                async
                src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
                crossOrigin="anonymous"
            />
            <Head>
            <Script
                async
                src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`}
                crossOrigin="anonymous"
            />
            </Head>
            <body
                className={`${inter.className} `}
                style={{
                    fontFamily: inter.fontFamily,
                    fontWeight: inter.fontWeight,
                    fontVariationSettings: inter.fontVariationSettings,
                }}
            >
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
