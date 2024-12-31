import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

const GameScreen = ({
    score,
    setScore,
    level,
    setLevel,
    endGame,
}: {
    score: number
    setScore: (score: number) => void
    level: number
    setLevel: (level: any) => void
    endGame: () => void
}) => {
    const [sequence, setSequence] = useState<number[]>([])
    const [hiddenIndex, setHiddenIndex] = useState<number | null>(null)
    const [userAnswer, setUserAnswer] = useState('')
    const [streak, setStreak] = useState(0)
    const [feedback, setFeedback] = useState<'correct' | 'incorrect' | ''>('')
    const [timeLeft, setTimeLeft] = useState(60)

    const generateSequence = () => {
        let numbers: number[] = []

        // Different sequence types based on level
        switch (level) {
            case 1: // Fibonacci
                numbers = [1, 1]
                for (let i = 2; i < 6; i++) {
                    numbers[i] = numbers[i - 1] + numbers[i - 2]
                }
                break
            case 2: // Prime Numbers
                numbers = [2, 3, 5, 7, 11, 13]
                break
            case 3: // Odd-Even
                numbers = Array.from({ length: 6 }, (_, i) => i % 2 === 0 ? 2 * (i + 1) : 2 * i + 1)
                break
            case 4: // Geometric
                const ratio = 2
                numbers = Array.from({ length: 6 }, (_, i) => Math.pow(ratio, i))
                break
            case 5: // Square
                numbers = Array.from({ length: 6 }, (_, i) => Math.pow(i + 1, 2))
                break
            case 6: // Cubic
                numbers = Array.from({ length: 6 }, (_, i) => Math.pow(i + 1, 3))
                break
            default:
                numbers = Array.from({ length: 6 }, (_, i) => i + 1)
        }

        const hidePos = Math.floor(Math.random() * (numbers.length - 2)) + 1
        setSequence(numbers)
        setHiddenIndex(hidePos)
        setUserAnswer('')
        setFeedback('')
    }

    const checkAnswer = () => {
        const answer = parseInt(userAnswer)
        if (answer === sequence[hiddenIndex!]) {
            setScore(score + level * 10)
            setStreak(streak + 1)
            setFeedback('correct')
            if (streak + 1 >= 3) {
                setLevel((prev: number) => Math.min(prev + 1, 6))
                setStreak(0)
            }
        } else {
            setStreak(0)
            setFeedback('incorrect')
        }
        setTimeout(generateSequence, 1500)
    }

    useEffect(() => {
        generateSequence()
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer)
                    endGame()
                }
                return prev - 1
            })
        }, 1000)
        return () => clearInterval(timer)
    }, [level])

    const getSequenceDescription = () => {
        switch (level) {
            case 1:
                return 'Find the next number in the Fibonacci Sequence'
            case 2:
                return 'Find the missing Prime Number'
            case 3:
                return 'Complete the Odd-Even Sequence'
            case 4:
                return 'Find the next number in the Geometric Sequence'
            case 5:
                return 'Find the missing Square Number'
            case 6:
                return 'Find the missing Cubic Number'
            default:
                return 'Find the pattern'
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="text-center space-y-4"
        >
            <div className="flex justify-between text-lg mb-4">
                <span>Level: {level}</span>
                <span>Score: {score}</span>
                <span>Time: {timeLeft}s</span>
            </div>

            <h2 className="text-2xl font-bold">Pattern Sequence</h2>
            <p className="text-lg mb-4">{getSequenceDescription()}</p>

            <div className="flex justify-center gap-4 mb-6">
                <AnimatePresence>
                    {sequence.map((num, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className={`w-16 h-16 flex items-center justify-center text-xl font-bold rounded-lg
                ${index === hiddenIndex
                                    ? feedback === 'correct'
                                        ? 'bg-green-500 text-white'
                                        : feedback === 'incorrect'
                                            ? 'bg-red-500 text-white'
                                            : 'bg-gray-200'
                                    : 'bg-blue-500 text-white'}`}
                        >
                            {index === hiddenIndex ? (feedback ? userAnswer : '?') : num}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="space-y-4">
                <input
                    type="number"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    className="w-24 p-2 text-center text-lg border rounded"
                    placeholder="?"
                    disabled={!!feedback}
                />
                <div>
                    <Button
                        onClick={checkAnswer}
                        className="ml-4"
                        disabled={!userAnswer || !!feedback}
                    >
                        Check
                    </Button>
                </div>
                <AnimatePresence>
                    {feedback && (
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className={`text-lg font-bold ${feedback === 'correct' ? 'text-green-500' : 'text-red-500'
                                }`}
                        >
                            {feedback === 'correct' ? 'Correct!' : 'Try again!'}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

export default GameScreen

