import BlurFade from '@/components/ui/blur-fade';
import BoxReveal from '@/components/ui/box-reveal'
import { Button } from '@/components/ui/button';
// import Globe from '@/components/ui/globe';
// import PulsatingButton from '@/components/ui/pulsating-button';
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
            <section className="flex flex-col-reverse items-center justify-center gap-3 px-4 py-24 sm:h-screen sm:flex-row sm:px-12 md:px-24 lg:px-48">
                <div className="max-w-3xl">
                    <BoxReveal boxColor={"#5145a8"} duration={0.5}>
                        <p className="text-3xl font-semibold sm:text-[3.5rem] sm:leading-[4.5rem]">
                            Fibonacci, Prima, Geometri Semua <span className="text-wise-primary">Siap Dihitung!</span>
                        </p>
                    </BoxReveal>

                    <BoxReveal boxColor={"#5145a8"} duration={0.5}>
                        <h2 className="mt-2 text-base sm:mt-[0.5rem] sm:text-lg">
                            Hitung Semua Jenis Bilangan dan Geometri{" "}
                            <span className="text-wise-primary">dengan Cepat!</span>
                        </h2>
                    </BoxReveal>

                    <Button className="bg-wise-primary px-10 py-7 mt-5 rounded-full  text-xl">
                        Jelajahi Fitur
                    </Button>
                </div>

                <BlurFade delay={0.25} inView className="w-11/12 sm:w-[40%] mt-12">
                    <img className="w-full rounded-xl" src="HeroImage.webp" alt="" />
                </BlurFade>
            </section>

            <section className="flex flex-col items-center justify-center gap-3 px-4 py-20 bg-wise-secondary sm:h-screen sm:flex-row sm:px-12 md:px-24 lg:px-48">
                <BlurFade delay={0.25} inView className="w-full sm:w-[40%]">
                    <img className="w-full rounded-xl" src="DescImage.jpg" alt="" />
                </BlurFade>

                <BlurFade delay={0.25} inView className="w-full sm:w-[55%]">
                    <p className="text-justify text-lg">
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

            <section className="flex items-center justify-center h-screen gap-3 px-4 sm:px-12 md:px-24 lg:px-48">
                {/* <div className="relative flex size-full items-center justify-center">
            <Globe className="top-28" />
          </div> */}
            </section>
        </div>
    )
}
