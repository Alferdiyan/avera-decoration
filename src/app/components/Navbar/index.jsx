import Link from "next/link";
import React from "react";

export default function Navbar() {
    const menuItems = [
        { id: 2, name: "wedding", link: "#wedding" },
        { id: 3, name: "Lamaran", link: "#lamaran" },
        { id: 4, name: "Akad", link: "#akad" },
    ];
    return (
        <header className="bg-color-dark text-color-accent ">
            <div className="flex sm:flex-row flex-col justify-between md:item-center gap-2 p-3">
                <Link href="/" className="font-bold text-white text-2xl">
                    Avera Decoration
                </Link>
                <ul className={`flex gap-4 justify-center   items-center`}>
                    {menuItems.map((item) => (
                        <li
                            className="hover:hover:text-color-primary hover:font-semibold"
                            key={item.id}
                        >
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
