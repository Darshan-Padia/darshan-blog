import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
            <script
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
