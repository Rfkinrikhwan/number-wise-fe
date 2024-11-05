import BlurFade from '@/components/ui/blur-fade';
import BoxReveal from '@/components/ui/box-reveal'
import Marquee from '@/components/ui/marquee'

export default function Index() {
    const logos = [
        {
            name: "Microsoft",
            img: "https://wallpapers.com/images/featured/math-aesthetic-mv0izjvliqscpz56.webp",
        },
        {
            name: "Microsoft",
            img: "https://img.freepik.com/free-photo/numerology-concept-with-book_23-2150354496.jpg?size=626&ext=jpg",
        }, {
            name: "Microsoft",
            img: "https://img.freepik.com/free-photo/school-supplies-arrangement-high-angle_23-2149000280.jpg?size=626&ext=jpg",
        }, {
            name: "Microsoft",
            img: "https://img.freepik.com/free-photo/back-school-concept-with-various-supplies_23-2149557512.jpg?size=626&ext=jpg&ga=GA1.1.704646605.1729004324&semt=ais_hybrid",
        }, {
            name: "Microsoft",
            img: "https://img.freepik.com/premium-photo/notebook-with-map-it-that-says-st-seuss-it_1109006-115659.jpg?size=626&ext=jpg&ga=GA1.1.704646605.1729004324&semt=ais_hybrid",
        },
    ];

    return (
        <div>
            <section className='h-screen flex items-center justify-between gap-3'>
                <div className="max-w-2xl items-center justify-center overflow-hidden">
                    <BoxReveal boxColor={"#42A5F5"} duration={0.5}>
                        <p className="text-[3.5rem] font-semibold">
                            Fibonacci, Prima, Geometri Semua <span className="text-wise-secondary">Siap Dihitung!</span>
                        </p>
                    </BoxReveal>

                    <BoxReveal boxColor={"#42A5F5"} duration={0.5}>
                        <h2 className="mt-[.5rem] text-[1rem]">
                            Hitung Semua Jenis Bilangan dan Geometri {" "}
                            <span className="text-wise-secondary">dengan Cepat!</span>
                        </h2>
                    </BoxReveal>

                    <BoxReveal boxColor={"#42A5F5"} duration={0.5}>
                        <div className="mt-6">
                            <p>
                                -&gt; Dapatkan hasil akurat untuk bilangan Fibonacci, prima, genap, ganjil, dan banyak lagi. <br />
                                -&gt; Kalkulator lengkap untuk menghitung luas persegi panjang, layang-layang. <br />
                            </p>
                        </div>
                    </BoxReveal>
                </div>

                {/* <div className="relative flex h-3/5 w-96 flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border border-slate-50 shadow-sm bg-background px-16">
                    <div className="flex flex-row gap-4 [perspective:300px]">
                        <Marquee
                            className="justify-center overflow-hidden [--duration:60s] [--gap:1rem]"
                            vertical
                            style={{
                                transform:
                                    "translateX(0px) translateY(0px) translateZ(-50px) rotateX(0deg) rotateY(-20deg) rotateZ(10deg) scale(1.5)",
                            }}
                        >
                            {logos.map((data, idx) => (
                                <img
                                    key={idx}
                                    src={data.img}
                                    alt={data.name}
                                    className="mx-auto h-full w-3/4 cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-300"
                                />
                            ))}
                        </Marquee>
                    </div>

                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
                </div> */}

                <BlurFade delay={0.25} inView className='w-[35%]'>
                    <img className="w-full rounded-xl" src="https://media.istockphoto.com/id/1358014313/id/foto/sekelompok-siswa-sd-memiliki-kelas-komputer-dengan-guru-mereka-di-kelas.jpg?s=612x612&w=0&k=20&c=1eoRoAi5M3oq9nKomVFuQ8jUyV7E70txZar6-RRDToo=" alt="" />
                </BlurFade>
            </section>

            <section className='h-screen'></section>
            <section className='h-screen'></section>
        </div>
    )
}
