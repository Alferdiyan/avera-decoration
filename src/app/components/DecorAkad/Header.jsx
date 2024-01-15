import Link from "next/link";
import React from "react";

export default function Header({ title, LinkHref, LinkTitle }) {
    return (
        <div className="p-4 font-bold text-xl text-color-primary flex flex-col justify-center items-center">
            <h1 className="flex justify-center font-extrabold text-5xl">
                {title}
            </h1>

            {LinkHref && LinkTitle ? (
                <Link
                    href={LinkHref}
                    className="md:text-xl text-sm text-color-primary hover:text-color-accent underline hover:text-cyan-500 transition-all duration-300"
                >
                    {LinkTitle}
                </Link>
            ) : null}
        </div>
    );
}
