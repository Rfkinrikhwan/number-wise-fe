import WiseIcon from "@/components/icon";
import { Button } from "@/components/ui/button";


export default function SectionFour() {

    const cards = [
        {
            image: "36.png",
            title: "Learning With Games? Why...",
            subtitle: "Quiz",
            description: "Test your understanding with a short but fun quizzes!"
        },
        {
            image: "38.png",
            title: "10 Learning Game ideas",
            subtitle: "Quiz",
            description: "10 ideas for learning with for your kids to have fun"
        },
        {
            image: "37.png",
            title: "Fun Activities For Kids",
            subtitle: "Quiz",
            description: "Test your understanding with a short but fun quizzes!"
        },
    ];

    return (
        <section className="flex flex-col gap-10 relative sm:px-12 md:px-24 lg:px-48 px-4 py-20 min-h-screen border-b border-slate-200">

            <h1 className="text-4xl md:text-5xl !font-semibold text-gray-900 quicksand-font">
                Read our <span className='text-wise-primary courgette'>blog</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-slate-100 rounded-3xl overflow-hidden flex flex-col"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl font-bold mb-1">{card.title}</h3>

                            <p className="text-gray-600 mt-2">{card.description}</p>

                            <div className='flex justify-start items-center gap-3 w-max mt-5'>
                                <p className='text-wise-primary font-semibold'>Read More</p>
                                <Button className='rounded-full w-8 h-8 bg-wise-primary text-white hover:bg-wise-primary/90 transition-colors'>
                                    <WiseIcon iconName="GoArrowUpRight" />
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
