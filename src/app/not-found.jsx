"use client";
import Link from "next/link";
import React from "react";

export default function Page() {
    return (
        <div className="min-h-screen  text-color-accent flex flex-col gap-3 justify-center items-center">
            <div
                className="flex justify-center items-center gap-2 
            "
            >
                <p className="text-color-accent font-bold uppercase">
                    not-found
                </p>
            </div>
            <Link
                href={"/"}
                className="text-color-primary underline hover:text-color-accent"
            >
                kembali
            </Link>
        </div>
    );
}
