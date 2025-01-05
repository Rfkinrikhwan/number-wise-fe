import React from 'react';
import { motion } from 'framer-motion';

type SnakeSegmentProps = {
    x: number;
    y: number;
    index: number;
    total: number;
    direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
    gridSize: number;
};

export const SnakeSegment: React.FC<SnakeSegmentProps> = ({ x, y, index, total, direction, gridSize }) => {
    const isHead = index === 0;
    const isTail = index === total - 1;

    const getSegmentColor = () => {
        if (isHead) return 'from-green-700 to-green-900';
        if (isTail) return 'from-green-600 to-green-800';
        return 'from-green-500 to-green-700';
    };

    const getRotation = () => {
        switch (direction) {
            case 'UP': return 0;
            case 'RIGHT': return 90;
            case 'DOWN': return 180;
            case 'LEFT': return 270;
        }
    };

    return (
        <motion.div
            className={`absolute bg-gradient-to-r ${getSegmentColor()} shadow-lg`}
            style={{
                width: `${120 / gridSize}%`,
                height: `${120 / gridSize}%`,
                left: `${(x / gridSize) * 100 - 10 / gridSize}%`,
                top: `${(y / gridSize) * 100 - 10 / gridSize}%`,
                borderRadius: isHead ? '60% 60% 30% 30%' : isTail ? '30% 30% 60% 60%' : '40%',
            }}
            initial={{ scale: 0, rotate: getRotation() }}
            animate={{
                scale: 1,
                rotate: getRotation(),
                transition: { type: 'spring', stiffness: 500, damping: 30 }
            }}
            transition={{
                type: 'spring',
                stiffness: 500,
                damping: 30,
            }}
        >
            {isHead && (
                <>
                    <motion.div
                        className="absolute w-1/4 h-1/5 bg-black rounded-full"
                        style={{
                            top: '20%',
                            left: direction === 'LEFT' ? '15%' : '60%',
                        }}
                        animate={{
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1,
                        }}
                    >
                        <motion.div
                            className="absolute w-1/2 h-1/2 bg-white rounded-full"
                            style={{
                                top: '25%',
                                left: '25%',
                            }}
                        />
                    </motion.div>
                    <div
                        className="absolute w-1/5 h-1/10 bg-red-600 rounded-full"
                        style={{
                            bottom: '15%',
                            left: '40%',
                        }}
                    />
                </>
            )}
        </motion.div>
    );
};

