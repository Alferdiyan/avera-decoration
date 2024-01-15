import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Avera Decoration",
    description: "Dekorasi Lamran terbaik",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} bg-color-secondary text-color-primary`}
            >
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
