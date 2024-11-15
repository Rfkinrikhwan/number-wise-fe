import WiseIcon from "@/components/icon";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import cardData from "@/json/DataFeature.json"
import { CardDataType } from "@/types/CardDataTypes";
// import { Link } from "react-router-dom";

export default function Feature() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="flex flex-col items-center min-h-screen gap-10 px-4 py-10 sm:px-12 md:px-24 lg:px-48">

            <div className="grid gap-8 md:grid-cols-3 mt-20">
                {cardData.map((card: CardDataType, index) => (
                    <div key={index} className="group cursor-pointer" data-aos="zoom-in-up">
                        <div className="bg-white rounded-t-2xl">
                            <div className={`bg-${card.color} h-48 rounded-2xl transition-all duration-300 group-hover:rounded-lg`} style={{ backgroundImage: `url(${card.background_img})`, backgroundSize: "200px", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                                <div className="p-6 h-full rounded-2xl group-hover:rounded-lg" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3))`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-b-2xl shadow-lg flex flex-col items-end">
                            <p className="text-gray-600">
                                {card.description}
                            </p>

                            <Button variant={"outline"} className="mt-5 rounded-full border-wise-primary text-wise-primary hover:text-wise-primary">
                                Lihat Detail
                                <WiseIcon iconName="HiOutlineExternalLink" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
