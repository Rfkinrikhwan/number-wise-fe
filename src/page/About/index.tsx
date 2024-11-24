import WiseIcon from "@/components/icon";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    window.addEventListener("scroll", toggleVisible);

    return (
        <section className="flex flex-col gap-10 items-center relative sm:px-12 md:px-24 lg:px-48 px-4 py-5 min-h-screen">
            <Link to={`/`} className='flex justify-start items-center gap-3 w-max mt-5'>
                <p className='text-wise-primary font-semibold text-xl'>Halaman Utama</p>
                <div className='flex justify-center items-center rounded-full w-8 h-8 bg-wise-primary text-white hover:bg-wise-primary/90 transition-colors'>
                    <WiseIcon iconName="GoArrowUpLeft" />
                </div>
            </Link>

            <h1 className="text-2xl sm:text-4xl font-bold">
                Tentang Number Wise
            </h1>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-wise-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow" data-aos="fade-left">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-slate-900">Apa Itu Number Wise</div>
                        </div>
                        <div className="text-slate-500">
                            <b>Number Wise</b> adalah aplikasi web interaktif yang dirancang khusus untuk membantu Anda melakukan perhitungan berbagai
                            jenis bilangan dan geometri dengan mudah dan cepat.
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-wise-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow" data-aos="fade-right">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-slate-900">Latar Belakang</div>
                        </div>
                        <div className="text-slate-500">
                            Perkembangan teknologi yang pesat telah mengubah cara kita belajar dan memahami matematika. Namun, banyak siswa masih kesulitan dalam memahami konsep-konsep matematika dasar. Number Wise hadir sebagai solusi untuk menjembatani kesenjangan ini dengan menyediakan platform pembelajaran matematika yang interaktif dan mudah digunakan.
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-wise-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow" data-aos="fade-left">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-slate-900">Landasan Dasar</div>
                        </div>
                        <div className="text-slate-500">
                            Number Wise dibangun dengan tiga pilar utama: aksesibilitas, interaktivitas, dan keakuratan. Aplikasi ini dirancang untuk memudahkan pengguna dalam memahami konsep matematika melalui visualisasi dan perhitungan yang tepat, sambil tetap menjaga antarmuka yang ramah pengguna dan responsif.
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-wise-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow" data-aos="fade-right">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-slate-900">Tujuan Pengembangan</div>
                        </div>
                        <div className="text-slate-500">
                            Aplikasi ini dikembangkan dengan tujuan utama untuk membantu siswa dan pendidik dalam proses pembelajaran matematika. Number Wise bertujuan untuk mengubah persepsi bahwa matematika itu sulit dengan menyediakan alat bantu perhitungan yang mudah digunakan dan pemahaman yang lebih baik tentang konsep-konsep matematika dasar.
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-wise-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow" data-aos="fade-left">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-slate-900">Team Wise</div>
                        </div>
                        <div className="text-slate-500">
                            Number Wise merupakan project akhir tugas kuliah, yang bertujuan untuk menyelesaikan perhitungan matematika secara interaktif. Aplikasi ini merupakan hasil kolaborasi dari sekelompok mahasiswa Teknik Informatika yang memiliki passion dalam teknologi dan pendidikan. Kami percaya bahwa dengan menggabungkan kreativitas, pengetahuan teknis, dan pemahaman akan kebutuhan pengguna, kami dapat menciptakan solusi yang bermanfaat bagi masyarakat. Mari berkenalan dengan anggota tim kami yang telah bekerja keras dalam mengembangkan Number Wise:
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-wise-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow" data-aos="fade-right">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-slate-900">Daffa Habibi</div>
                        </div>
                        <div className="text-slate-500">
                            haii aku dafa, aku salah satu anggota dari team project Number Wise.
                            alasan aku memilih jurusan Teknik Informatika karena saya ingin
                            mempelajari dan mengembangkan teknologi/koding.bukan hanya itu aja
                            saya mau membuat sebuah teknologi menggunakan website
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-wise-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow" data-aos="fade-left">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-slate-900">Muhammad Rizna Taris</div>
                        </div>
                        <div className="text-slate-500">
                            haii aku Taris, aku salah satu anggota dari team project Number Wise.
                            alasan saya memilih jurusan Teknik Informatika karena saya memiliki
                            ketertarikan dengan perkembangan teknologi, bukan hanya itu Teknik
                            Informatika melatih logika, kreativitas, dan kemampuan analitis,
                            yang selalu membuat saya tertantang untuk berkembang di bidang teknologi.
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-wise-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow" data-aos="fade-right">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-slate-900">Rizky Syahputra</div>
                        </div>
                        <div className="text-slate-500">
                            haii aku rizky, aku salah satu anggota dari team project Number Wise.
                            alasan aku memilih jurusan Teknik Informatika karena saya suka dengan
                            perkembangan teknologi, bukan hanya karena itu saja karena teknologi
                            itu semakin tahun semakin berkembang pesat jika saya tidak belajar saya
                            akan tertinggal dengan orang" yang paham dengan dunia teknologi.
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-wise-primary text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow" data-aos="fade-left">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className="font-bold text-slate-900">Rifki Nur Ikhwan</div>
                        </div>
                        <div className="text-slate-500">
                            Hai aku rifki, aku adalah salah satu anggota tim project Number Wise.
                            Kenapa sih aku memilih jurusan Teknik Informatika ? Karena aku suka
                            dengan perkembangan teknologi terutama di bidang pemrograman, banyak
                            hal yang bisa aku gapai di bidang ini salah satu nya yaitu membuat
                            sistem yang dapat membantu dalam bidang pendidikan. Oleh karena itu
                            aku mengusulkan untuk membuat Number Wise ini.
                        </div>
                    </div>
                </div>
            </div>

            <Link to={`/`} className='flex justify-start items-center gap-3 w-max mt-5'>
                <p className='text-wise-primary font-semibold text-xl'>Halaman Utama</p>
                <div className='flex justify-center items-center rounded-full w-8 h-8 bg-wise-primary text-white hover:bg-wise-primary/90 transition-colors'>
                    <WiseIcon iconName="GoArrowUpLeft" />
                </div>
            </Link>

            {visible && (
                <button
                    className="fixed bottom-10 right-10 bg-wise-primary text-white p-3 rounded-full shadow-md hover:shadow-lg transition duration-300"
                    onClick={scrollToTop}
                >
                    <WiseIcon iconName="HiArrowSmUp" />
                </button>
            )}
        </section>
    );
}
