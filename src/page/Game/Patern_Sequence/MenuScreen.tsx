import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const MenuScreen = ({ startGame }: { startGame: () => void }) => {
    const isMobile = useMediaQuery('(max-width: 640px)')

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        },
        exit: { opacity: 0, y: -50 }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-center space-y-6"
        >
            <motion.h1 variants={itemVariants} className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Math Sequence Game
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg">
                Test your knowledge of mathematical sequences!
            </motion.p>
            <motion.div variants={itemVariants} className="space-y-4">
                <Button onClick={startGame} className="text-lg px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Play
                </Button>
                <div className={`text-left space-y-2 ${isMobile ? 'text-sm' : 'text-base'}`}>
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
            </motion.div>
        </motion.div>
    )
}

export default MenuScreen