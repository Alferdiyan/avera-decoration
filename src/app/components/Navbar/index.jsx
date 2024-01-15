import Link from "next/link";
import React from "react";

export default function Navbar() {
    // const Navbar = () => {
    //     const [menuItems] = useState([
    //         { id: 2, name: "About", link: "#" },
    //         { id: 3, name: "Service", link: "#" },
    //         { id: 4, name: "Portfolio", link: "#" },
    //         { id: 5, name: "Driblle", link: "https://dribbble.com/FerdiyanDSIGN" },
    //         { id: 6, name: "Behance", link: "https://www.behance.net/ferdiyanUI" },
    //     ]);

    const menuItems = [
        { id: 2, name: "Decor List", link: "#" },
        { id: 3, name: "Lamaran", link: "#" },
        { id: 4, name: "Akad", link: "#" },
        {
            id: 5,
            name: "Photograph",
            link: "https://dribbble.com/FerdiyanDSIGN",
        },
        { id: 6, name: "Make Up", link: "https://www.behance.net/ferdiyanUI" },
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
