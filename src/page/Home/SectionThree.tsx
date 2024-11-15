import WiseIcon from "@/components/icon";
import { Button } from "@/components/ui/button";
import SparklesText from "@/components/ui/sparkles-text";
import { Link } from "react-router-dom";

const cardData = [
    { title: "Deret Fibonaci", color: "bg-blue-500", textColor: "text-blue-100", description: "Deret Fibonacci merupakan rangkaian bilangan yang memiliki pola unik dan istimewa dalam matematika..." },
    { title: "Deret Prima", color: "bg-purple-500", textColor: "text-purple-100", description: "Deret Prima adalah rangkaian bilangan istimewa yang hanya memiliki dua faktor pembagi: angka 1 dan..." },
    { title: "Deret Ganjil Genap", color: "bg-green-500", textColor: "text-green-100", description: "Deret Ganjil Genap merupakan konsep fundamental dalam matematika yang membagi bilangan bulat..." },
    { title: "Deret Geometri", color: "bg-red-500", textColor: "text-red-100", description: "Deret Geometri adalah suatu rangkaian bilangan di mana setiap suku berikutnya diperoleh dengan..." },
    { title: "Deret Kuadrat", color: "bg-orange-500", textColor: "text-red-100", description: "Deret Kuadrat menampilkan urutan bilangan yang dihasilkan dari mengkuadratkan bilangan asli..." },
    { title: "Deret Kubik", color: "bg-pink-500", textColor: "text-red-100", description: "Deret Kubik merupakan rangkaian bilangan hasil pemangkatan tiga dari bilangan asli, membentuk..." }
];

export default function SectionThree() {

    return (
        <section className="flex flex-col items-center min-h-screen gap-10 px-4 py-10 sm:px-12 md:px-24 lg:px-48">
            <SparklesText text="Fitur Menarik" className="text-2xl sm:text-4xl" />

            <div className="grid gap-8 md:grid-cols-3">
                {cardData.map((card, index) => (
                    <div key={index} className="group cursor-pointer" data-aos="zoom-in-up">
                        <div className="bg-white rounded-t-2xl">
                            <div className={`${card.color} h-48 rounded-2xl p-6 transition-all duration-300 group-hover:rounded-lg`}>
                                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-b-2xl shadow-lg flex flex-col items-end">
                            <p className="text-gray-600">
                                {card.description}
                            </p>

                            <Button variant={"outline"} className="mt-5 rounded-full border-wise-primary text-wise-primary hover:text-wise-primary">
                                Coba Sekarang
                                <WiseIcon iconName="HiOutlineExternalLink" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <Link to="/fitur">
                <div className="flex gap-2 items-center cursor-pointer border-b-2 border-transparent hover:border-wise-primary transition-all duration-300">
                    <p>Lihat Semua Fitur </p>
                    <WiseIcon iconName="HiOutlineExternalLink" />
                </div>
            </Link>
        </section>
    );
}
