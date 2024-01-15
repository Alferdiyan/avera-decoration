import {
    FacebookLogo,
    InstagramLogo,
    MapPinLine,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <div>
            <div className="bg-color-dark flex  flex-col items-center justify-center text-color-primary h-32 rounded-xl gap-2 mx-4 mt-10 mb-4">
                <p>Follow Us</p>
                <div className="grid grid-flow-col gap-4  sm:justify-self-end text-color-accent">
                    <Link
                        href="https://https://www.instagram.com/dekor_lamaran_temanggung/"
                        className="4 hover:text-color-primary"
                    >
                        <InstagramLogo size={32} cursor="pointer" />
                    </Link>
                    <Link
                        href="https://https://www.instagram.com/dekor_lamaran_temanggung/"
                        className="4 hover:text-color-primary"
                    >
                        <FacebookLogo size={32} cursor="pointer" />
                    </Link>
                    <Link
                        href="https://https://www.instagram.com/dekor_lamaran_temanggung/"
                        className="4 hover:text-color-primary"
                    >
                        <MapPinLine size={32} cursor="pointer" />
                    </Link>
                </div>

                <div className="bg-color-primary w-3/4 border "></div>
                <p>© 2024 Avera Decoration </p>
            </div>
        </div>
    );
}
