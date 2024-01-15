import Image from "next/image";
import DecorList from "./components/DecorLamaran";
import Hero from "./components/Hero";
import Header from "./components/DecorLamaran/Header";
import bg from "../../public/backgorund/background.webp";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import DecorLamaran from "./components/DecorLamaran";
import DekorAkad from "./components/DecorAkad";
import WeddingDecoration from "./components/DecorWedding";

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
            {/* <div className="top-72 w-full absolute">
                <Service />
            </div> */}

            <section className="relative " id="lamaran">
                <Header
                    title="Dekorasi Lamaran"
                    LinkHref="/decorLamaran"
                    LinkTitle="Lihat Semua"
                />
                <DecorLamaran />
            </section>
            <section id="akad">
                <Header
                    title="Dekorasi Akad"
                    LinkHref="/decorAkad"
                    LinkTitle="Lihat Semua"
                />
                <DekorAkad />
            </section>
            <section className="py-10 " id="wedding">
                <Header
                    title="Dekorasi Weddding"
                    LinkHref="/decorLamaran"
                    LinkTitle="Lihat Semua"
                />
                <WeddingDecoration />
            </section>
            {/* <section>
                <Testimonial />
            </section> */}
        </main>
    );
}
