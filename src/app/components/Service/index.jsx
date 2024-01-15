import React from "react";
import ServicesCard from "./ServiceCard";
import { servicesData } from "@/data";

export default function Service() {
    return (
        <div className="h-max py-10">
            {/* <div className="flex justify-center uppercase tracking-[20px] text-primary text-2xl mt-10 m-30">
                Provide Services
            </div> */}
            <div className="flex flex-wrap gap-4  justify-center relative">
                {servicesData.map((service, index) => (
                    <ServicesCard
                        key={index}
                        judul={service.judul}
                        description={service.description}
                    />
                ))}
            </div>
        </div>
    );
}
