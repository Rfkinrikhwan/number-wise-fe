import { CardDataType } from '@/types/CardDataTypes'

interface props {
    cardData: CardDataType[]
}

export default function CardFeature({ cardData }: props) {
    return (
        <div className="grid gap-8 md:grid-cols-3">
            {cardData.map((card: CardDataType, index: number) => (
                <div key={index} className="rounded-3xl p-3 bg-wise-primary w-full relative overflow-hidden">
                    <img src="icon-2.png" className="w-48" alt="" />
                    <img src="icon-4.png" className="w-48 absolute -top-12 left-52" alt="" />
                    <div className="px-4 mb-4">
                        <p className="text-xl font-bold text-white">{card.title}</p>
                        <p className="mt-5 text-white">{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
