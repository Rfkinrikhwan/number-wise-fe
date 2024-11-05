import BlurFade from '@/components/ui/blur-fade';
import BoxReveal from '@/components/ui/box-reveal'
// import Marquee from '@/components/ui/marquee'

export default function Index() {
    // const logos = [
    //     {
    //         name: "Microsoft",
    //         img: "https://wallpapers.com/images/featured/math-aesthetic-mv0izjvliqscpz56.webp",
    //     },
    //     {
    //         name: "Microsoft",
    //         img: "https://img.freepik.com/free-photo/numerology-concept-with-book_23-2150354496.jpg?size=626&ext=jpg",
    //     }, {
    //         name: "Microsoft",
    //         img: "https://img.freepik.com/free-photo/school-supplies-arrangement-high-angle_23-2149000280.jpg?size=626&ext=jpg",
    //     }, {
    //         name: "Microsoft",
    //         img: "https://img.freepik.com/free-photo/back-school-concept-with-various-supplies_23-2149557512.jpg?size=626&ext=jpg&ga=GA1.1.704646605.1729004324&semt=ais_hybrid",
    //     }, {
    //         name: "Microsoft",
    //         img: "https://img.freepik.com/premium-photo/notebook-with-map-it-that-says-st-seuss-it_1109006-115659.jpg?size=626&ext=jpg&ga=GA1.1.704646605.1729004324&semt=ais_hybrid",
    //     },
    // ];

    return (
        <div>
            <section className='h-screen flex items-center justify-between gap-3 px-48'>
                <div className='flex justify-between w-full'>
                    <div className="max-w-2xl items-center justify-center overflow-hidden">
                        <BoxReveal boxColor={"#5145a8"} duration={0.5}>
                            <p className="text-[3.5rem] font-semibold">
                                Fibonacci, Prima, Geometri Semua <span className="text-wise-primary">Siap Dihitung!</span>
                            </p>
                        </BoxReveal>

                        <BoxReveal boxColor={"#5145a8"} duration={0.5}>
                            <h2 className="mt-[.5rem] text-[1rem]">
                                Hitung Semua Jenis Bilangan dan Geometri {" "}
                                <span className="text-wise-primary">dengan Cepat!</span>
                            </h2>
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

                    <BlurFade delay={0.25} inView className='w-[40%]'>
                        <img className="w-full rounded-xl" src="/public/HeroImage.webp" alt="" />
                    </BlurFade>
                </div>
            </section>

            <section className='h-screen flex items-center justify-between bg-wise-secondary px-48'>
                <BlurFade delay={0.25} inView className='w-[40%]'>
                    <img className="w-full rounded-xl" src="/public/DescImage.jpg" alt="" />
                </BlurFade>

                <BlurFade delay={0.25} inView className='w-[55%]'>
                    <p className='text-justify text-lg'>
                        <b>Number Wise</b> adalah aplikasi web interaktif yang dirancang khusus untuk membantu Anda melakukan perhitungan berbagai
                        jenis bilangan dan geometri dengan mudah dan cepat. Aplikasi ini merupakan solusi lengkap bagi siapa saja yang ingin
                        mengeksplorasi konsep matematika mulai dari deret Fibonacci, bilangan prima, hingga berbagai rumus geometri tanpa kerumitan.
                        Aplikasi ini cocok untuk pelajar, guru, atau siapa saja yang ingin belajar atau mengajarkan matematika dengan cara yang lebih
                        menyenangkan dan efektif. Dengan antarmuka yang sederhana dan ramah pengguna, Number Wise dapat diakses kapan saja, baik melalui
                        komputer maupun perangkat mobile. Setiap fitur dirancang untuk memberikan pengalaman pengguna yang intuitif, membuatnya mudah digunakan
                        oleh berbagai kalangan, dari pemula hingga tingkat lanjut.
                    </p>
                </BlurFade>
            </section>

            <section className='h-screen flex items-center justify-between gap-3 px-48'>
                <div className="max-w-2xl items-center justify-center overflow-hidden">
                    <BoxReveal boxColor={"#5145a8"} duration={0.5}>
                        <p className="text-[3.5rem] font-semibold">
                            Fibonacci, Prima, Geometri Semua <span className="text-wise-secondary">Siap Dihitung!</span>
                        </p>
                    </BoxReveal>

                    <BoxReveal boxColor={"#5145a8"} duration={0.5}>
                        <h2 className="mt-[.5rem] text-[1rem]">
                            Hitung Semua Jenis Bilangan dan Geometri {" "}
                            <span className="text-wise-secondary">dengan Cepat!</span>
                        </h2>
                    </BoxReveal>
                </div>

                <BlurFade delay={0.25} inView className='w-[35%]'>
                    <img className="w-full rounded-xl" src="/public/HeroImage.webp" alt="" />
                </BlurFade>
            </section>
        </div>
    )
}
