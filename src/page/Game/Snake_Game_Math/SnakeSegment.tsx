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

    const getSegmentStyle = () => {
        const baseStyle = {
            position: 'absolute' as const,
            width: `${100 / gridSize}%`,
            height: `${100 / gridSize}%`,
            left: `${(x / gridSize) * 100}%`,
            top: `${(y / gridSize) * 100}%`,
            backgroundColor: isHead ? '#4CAF50' : isTail ? '#81C784' : '#66BB6A',
        };

        if (isHead) {
            return {
                ...baseStyle,
                borderRadius: '50% 50% 0 0',
            };
        } else if (isTail) {
            return {
                ...baseStyle,
                borderRadius: '0 0 50% 50%',
            };
        } else {
            return {
                ...baseStyle,
                borderRadius: '25%',
            };
        }
    };

    return (
        <motion.div
            style={getSegmentStyle()}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
            {isHead && (
                <>
                    <div
                        style={{
                            position: 'absolute',
                            width: '20%',
                            height: '20%',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            top: '20%',
                            left: direction === 'LEFT' ? '20%' : '60%',
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            width: '10%',
                            height: '10%',
                            backgroundColor: 'black',
                            borderRadius: '50%',
                            top: '25%',
                            left: direction === 'LEFT' ? '25%' : '65%',
                        }}
                    />
                </>
            )}
        </motion.div>
    );
};

