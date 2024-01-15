import Image, { ImageProps, StaticImageData } from "next/image";
import React from "react";

export default function ServiceCard({ judul, description, logo }) {
    return (
        <div className="border border-base-100 rounded-lg hover:bg-color-secondary  h-60 w-60  flex flex-col bg-color-dark  justify-center items-center p-5">
            <div>
                <div className="relative flex justify-center items-center">
                    <Image
                        src={logo}
                        width="100"
                        height="100"
                        alt="object"
                        className=""
                    />
                </div>
            </div>
            <br />
            <br />
            <h1 className="text-sm relative">{judul}</h1>
            <p className="text-xs relative text-center">{description}</p>
        </div>
    );
}
