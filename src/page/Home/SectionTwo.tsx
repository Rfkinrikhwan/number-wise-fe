import BlurFade from '@/components/ui/blur-fade'
import SparklesText from '@/components/ui/sparkles-text'

export default function SectionTwo() {
    return (
        <section className="flex flex-col items-center gap-10 bg-wise-secondary relative sm:px-12 md:px-24 lg:px-48 px-4 py-20">
            <SparklesText text="About Number Wise" className='text-2xl sm:text-4xl' />

            <div className='flex flex-col items-start justify-between sm:flex-row gap-5 sm:gap-0'>
                <BlurFade delay={0.25} inView className="w-full sm:w-[40%]">
                    <img className="w-full rounded-xl" src="DescImage.jpg" alt="" data-aos="zoom-in-up" />
                </BlurFade>

                <BlurFade delay={0.25} inView className="w-full sm:w-[55%]">
                    <p className="text-justify text-lg" data-aos="zoom-in-up">
                        <b>Number Wise</b> adalah aplikasi web interaktif yang dirancang khusus untuk membantu Anda melakukan perhitungan berbagai
                        jenis bilangan dan geometri dengan mudah dan cepat. Aplikasi ini merupakan solusi lengkap bagi siapa saja yang ingin
                        mengeksplorasi konsep matematika mulai dari deret Fibonacci, bilangan prima, hingga berbagai rumus geometri tanpa kerumitan.
                        Aplikasi ini cocok untuk pelajar, guru, atau siapa saja yang ingin belajar atau mengajarkan matematika dengan cara yang lebih
                        menyenangkan dan efektif. Dengan antarmuka yang sederhana dan ramah pengguna, Number Wise dapat diakses kapan saja, baik melalui
                        komputer maupun perangkat mobile. Setiap fitur dirancang untuk memberikan pengalaman pengguna yang intuitif, membuatnya mudah digunakan
                        oleh berbagai kalangan, dari pemula hingga tingkat lanjut.
                    </p>
                </BlurFade>
            </div>

        </section>
    )
}
