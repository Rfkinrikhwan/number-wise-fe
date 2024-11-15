import BlurFade from '@/components/ui/blur-fade';
import BoxReveal from '@/components/ui/box-reveal';
import ShinyButton from '@/components/ui/shiny-button';
import { useNavigate } from 'react-router-dom';

export default function SectionOne() {
    const navigate = useNavigate();

    return (
        <section className="flex flex-col-reverse items-center justify-center gap-10 px-4 py-24 sm:h-screen sm:flex-row sm:px-12 md:px-24 lg:px-48">
            <div className="max-w-xl">
                <BoxReveal boxColor={"#a855f7"} duration={0.5}>
                    <p className="text-3xl font-bold sm:text-[3.5rem] sm:leading-[4.5rem]">
                        Fibonacci, Prima, Geometri Semua <span className="text-wise-primary">Siap Dihitung!</span>
                    </p>
                </BoxReveal>

                <BoxReveal boxColor={"#a855f7"} duration={0.5}>
                    <h2 className="mt-2 text-base sm:mt-[0.5rem] sm:text-lg">
                        Hitung Semua Jenis Bilangan dan Geometri{" "}
                        <span className="text-wise-primary">dengan Cepat!</span>
                    </h2>
                </BoxReveal>

                <ShinyButton onClick={() => navigate("/fitur")} className="bg-wise-primary px-10 py-4 mt-8 rounded-full font-bold text-xl !text-white">
                    Jelajahi Fitur
                </ShinyButton>
            </div>

            <BlurFade delay={0.25} inView className="sm:w-[50%] mt-12">
                <img className="rounded-xl" src="HeroImage.webp" alt="" data-aos="zoom-in-up" />
            </BlurFade>
        </section>
    )
}
