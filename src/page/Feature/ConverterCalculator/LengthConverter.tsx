import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { changeThemeStore } from '@/store';
import { motion } from "framer-motion";
import BackNavigation from '@/components/custom/BackNavigation';

const LengthConverter = () => {
    const { theme } = changeThemeStore();
    const [fromUnit, setFromUnit] = useState('kilometer');
    const [toUnit, setToUnit] = useState('meter');
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');

    const conversions: any = {
        // Kilometer conversions
        kilometer: {
            meter: (value: number) => value * 1000,
            centimeter: (value: number) => value * 100000,
            millimeter: (value: number) => value * 1000000,
        },
        // Mile conversions
        mile: {
            kilometer: (value: number) => value * 1.60934,
        },
        // Yard conversions
        yard: {
            meter: (value: number) => value * 0.9144,
        },
        // Foot conversions
        foot: {
            meter: (value: number) => value * 0.3048,
        },
        // Inch conversions
        inch: {
            centimeter: (value: number) => value * 2.54,
        }
    };

    const unitOptions = [
        { value: 'kilometer', label: 'Kilometers' },
        { value: 'mile', label: 'Miles' },
        { value: 'yard', label: 'Yards' },
        { value: 'foot', label: 'Feet' },
        { value: 'inch', label: 'Inches' },
    ];

    const getTargetUnits = (sourceUnit: string) => {
        switch (sourceUnit) {
            case 'kilometer':
                return [
                    { value: 'meter', label: 'Meters' },
                    { value: 'centimeter', label: 'Centimeters' },
                    { value: 'millimeter', label: 'Millimeters' },
                ];
            case 'mile':
                return [{ value: 'kilometer', label: 'Kilometers' }];
            case 'yard':
                return [{ value: 'meter', label: 'Meters' }];
            case 'foot':
                return [{ value: 'meter', label: 'Meters' }];
            case 'inch':
                return [{ value: 'centimeter', label: 'Centimeters' }];
            default:
                return [];
        }
    };

    const handleConvert = () => {
        if (!inputValue) {
            setResult('');
            return;
        }

        const value = parseFloat(inputValue);
        if (isNaN(value)) {
            setResult('Invalid input');
            return;
        }

        const conversionFunction = conversions[fromUnit as keyof typeof conversions]?.[toUnit as any];
        if (conversionFunction) {
            const convertedValue = conversionFunction(value);
            setResult(`${convertedValue.toFixed(2)} ${toUnit}`);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section
            className={`${theme === "dark" ? "bg-wise-dark" : ""
                } flex flex-col min-h-screen gap-5 px-4 py-6 sm:px-12 md:px-24 lg:px-48`}
        >
            <BackNavigation title="Length Converter" to="/features" />

            <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Converting length values between different units for various purposes, such as measuring distances, objects, or maps.
            </p>

            <Card className="w-full">
                <CardHeader></CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">From:</label>
                        <Select
                            value={fromUnit}
                            onValueChange={(value) => {
                                setFromUnit(value);
                                setToUnit(getTargetUnits(value)[0].value);
                                setResult('');
                            }}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select unit" />
                            </SelectTrigger>
                            <SelectContent>
                                {unitOptions.map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">To:</label>
                        <Select value={toUnit} onValueChange={(value) => {
                            setToUnit(value);
                            setResult('');
                        }}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select unit" />
                            </SelectTrigger>
                            <SelectContent>
                                {getTargetUnits(fromUnit).map((option) => (
                                    <SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Value:</label>
                        <Input
                            type="number"
                            value={inputValue}
                            onChange={(e) => {
                                setInputValue(e.target.value);
                                setResult('');
                            }}
                            onKeyUp={(e) => {
                                if (e.key === 'Enter') {
                                    handleConvert();
                                }
                            }}
                            placeholder="Enter value"
                        />
                    </div>

                    <motion.button
                        className="w-full bg-wise-primary text-white py-2 rounded-md hover:bg-wise-primary/80 transition-colors"
                        onClick={handleConvert}
                        whileHover={{ scale: 1 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Convert
                    </motion.button>

                    {result && (
                        <motion.div
                            className="mt-4 p-3 bg-gray-100 rounded-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Confetti effect */}
                            {[...Array(10)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 bg-wise-secondary rounded-full"
                                    initial={{
                                        x: Math.random() * 200 - 100,
                                        y: -50,
                                    }}
                                    animate={{
                                        y: [0, 300],
                                        x: [0, Math.random() * 200 - 100],
                                        opacity: [1, 0],
                                    }}
                                    transition={{
                                        duration: 1 + Math.random(),
                                        delay: i * 0.1,
                                    }}
                                />
                            ))}
                            <motion.p
                                className="text-center font-medium"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                Result: {result}
                            </motion.p>
                        </motion.div>
                    )}
                </CardContent>
            </Card>
        </section>
    );
};

export default LengthConverter;
