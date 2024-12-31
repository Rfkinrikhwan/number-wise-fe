import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const MenuScreen = ({ startGame }: { startGame: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="text-center space-y-6"
        >
            <h1 className="text-3xl font-bold">Math Sequence Game</h1>
            <p className="text-lg">Test your knowledge of mathematical sequences!</p>
            <div className="space-y-4">
                <Button onClick={startGame} className="text-lg px-6 py-3">
                    Play
                </Button>
                <div className="text-left space-y-2">
                    <h2 className="text-xl font-semibold">Sequence Types:</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Level 1: Fibonacci Sequence</li>
                        <li>Level 2: Prime Numbers</li>
                        <li>Level 3: Odd-Even Numbers</li>
                        <li>Level 4: Geometric Sequence</li>
                        <li>Level 5: Square Numbers</li>
                        <li>Level 6: Cubic Numbers</li>
                    </ul>
                    <h2 className="text-xl font-semibold mt-4">How to Play:</h2>
                    <ul className="list-disc list-inside">
                        <li>Find the missing number in each sequence</li>
                        <li>Enter your answer in the box</li>
                        <li>Get 3 correct answers to advance to the next level</li>
                        <li>Complete as many sequences as you can before time runs out!</li>
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default MenuScreen

