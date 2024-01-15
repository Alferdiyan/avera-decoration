import { testimonialData } from "@/data";
import React from "react";

export default function Testimonial() {
    const renderRatingStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i}>&#9733;</span>); // Menggunakan karakter Unicode untuk simbol bintang
        }

        if (hasHalfStar) {
            stars.push(<span key="half">&#9733;&#189;</span>); // Menambahkan setengah simbol bintang jika ada
        }

        return stars;
    };

    return (
        <div className=" min-h-screen grid justify-center items-center">
            <h1 className="flex justify-center font-extrabold text-5xl">
                Testimonials
            </h1>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-24 justify-center">
                {testimonialData.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="border p-10 w-[390px] rounded-3xl"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                Rating: {renderRatingStars(testimonial.rating)}
                            </div>
                            {/* <Image
                                src={testimonial.avatar}
                                alt="Avatar"
                                width={40}
                                height={40}
                                className="rounded-full"
                            /> */}
                            <div className="rounded-full h-10 w-10">.</div>
                        </div>
                        <p>{testimonial.description}</p>
                        <div className="flex items-center mt-4">
                            {/* <Image
                                src={testimonial.avatar}
                                alt="Avatar"
                                width={30}
                                height={30}
                                className="rounded-full"
                            /> */}

                            <div className="ml-2">
                                <p className="font-semibold">
                                    {testimonial.name}
                                </p>
                                <p className="text-sm">
                                    {testimonial.location}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
