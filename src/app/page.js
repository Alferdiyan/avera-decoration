import Image from "next/image";
import DecorList from "./components/DecorList";
import Hero from "./components/Hero";
import Header from "./components/DecorList/Header";
import bg from "../../public/backgorund/background.webp";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";

export default function Home() {
    return (
        <main className="relative">
            <div className="h-screen relative flex items-end overflow-hidden mb-24">
                <Image
                    src={bg}
                    height="fill"
                    className="w-full object-bottom"
                />

                <div className="absolute top-24  text-color-accent font-extrabold w-full">
                    <div className="flex justify-center items-center">
                        <p>Dekorasi lamaran</p>
                    </div>
                </div>
            </div>
            <div className="top-72 w-full absolute">
                <Service />
            </div>

            <section></section>
            <section className="relative ">
                <Header
                    title="Dekorasi Lamaran"
                    LinkHref="/decorLamaran"
                    LinkTitle="Lihat Semua"
                />
                <DecorList />
            </section>
            <section>
                <Header
                    title="Dekorasi Akad"
                    LinkHref="/decorAkad"
                    LinkTitle="Lihat Semua"
                />
                <DecorList />
            </section>
            <section className="py-10 ">
                <Header
                    title="Dekorasi Ulang tahun"
                    LinkHref="/decorLamaran"
                    LinkTitle="Lihat Semua"
                />
                <DecorList />
            </section>
            <section>
                <Testimonial />
            </section>
        </main>
    );
}
