import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { changeThemeStore } from '@/store'
import MenuScreen from './MenuScreen'
import GameScreen from './GameScreen'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const MathPatternGame = () => {
    const { theme } = changeThemeStore()
    const [gameState, setGameState] = useState<'menu' | 'playing' | 'gameOver'>('menu')
    const [score, setScore] = useState(0)
    const [level, setLevel] = useState(1)

    const isMobile = useMediaQuery('(max-width: 640px)')

    const startGame = () => {
        setGameState('playing')
        setScore(0)
        setLevel(1)
    }

    const endGame = () => {
        setGameState('gameOver')
    }

    return (
        <section className={`${theme === 'dark' ? 'bg-wise-dark' : ''} flex flex-col min-h-screen gap-10 px-4 py-6 sm:px-12 md:px-24 lg:px-48`}>
            <div className="absolute inset-0 h-full top-16 w-full bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:30px_30px]"></div>

            <Card className={`w-full ${isMobile ? 'max-w-sm' : 'max-w-2xl'} mx-auto p-6 overflow-hidden z-10 bg-opacity-90 backdrop-filter backdrop-blur-lg`}>
                <AnimatePresence mode="wait">
                    {gameState === 'menu' && (
                        <MenuScreen key="menu" startGame={startGame} />
                    )}
                    {gameState === 'playing' && (
                        <GameScreen
                            key="game"
                            score={score}
                            setScore={setScore}
                            level={level}
                            setLevel={setLevel}
                            endGame={endGame}
                        />
                    )}
                    {gameState === 'gameOver' && (
                        <motion.div
                            key="gameOver"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            className="text-center space-y-4"
                        >
                            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">Game Over</h2>
                            <p className="text-lg">Your final score: {score}</p>
                            <Button onClick={startGame} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                                Play Again
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Card>
        </section>
    )
}

export default MathPatternGame

