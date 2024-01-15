"use client";
import React from "react";
import { decoration } from "@/data";
import Image from "next/image";
import Header from "./Header";

export default function DecorList() {
    return (
        <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-8 ">
                {decoration.map((decoration, index) => {
                    return (
                        <Image
                            src={decoration.images_url}
                            width={350}
                            height={350}
                            alt="..."
                            className="h-full object-cover max-h-64 z-10"
                        />
                    );
                })}
            </div>
            <div className="h-full w-1/2 -bottom-3 right-0  z-0 bg-color-accent absolute"></div>
        </div>
    );
}
