import { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import BackNavigation from '@/components/custom/BackNavigation';
import { changeThemeStore } from '@/store';

const VolumeConverter = () => {
    const { theme } = changeThemeStore();
    const [fromUnit, setFromUnit] = useState('cubic_meter');
    const [toUnit, setToUnit] = useState('liter');
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');

    const conversions: any = {
        // Meter kubik ke Liter
        cubic_meter: {
            liter: (value: number) => value * 1000,
        },
        // Liter ke Mililiter
        liter: {
            milliliter: (value: number) => value * 1000,
        },
        // Gallon ke Liter
        gallon: {
            liter: (value: number) => value * 3.78541, // US Gallon
        },
        // Kubik ke Liter (1 kubik = 1000 liter)
        cubic: {
            liter: (value: number) => value * 1000,
        }
    };

    const unitOptions = [
        { value: 'cubic_meter', label: 'Cubic Meter' },
        { value: 'liter', label: 'Liter' },
        { value: 'gallon', label: 'Gallon' },
        { value: 'cubic', label: 'Cubic' },
    ];

    const getTargetUnits = (sourceUnit: string) => {
        switch (sourceUnit) {
            case 'cubic_meter':
                return [{ value: 'liter', label: 'Liter' }];
            case 'liter':
                return [{ value: 'milliliter', label: 'Milliliter' }];
            case 'gallon':
                return [{ value: 'liter', label: 'Liter' }];
            case 'cubic':
                return [{ value: 'liter', label: 'Liter' }];
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
            setResult(`${convertedValue.toLocaleString('en-US')} ${toUnit === 'milliliter' ? 'mL' : toUnit}`);
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
            <BackNavigation title="Volume Converter" to="/features" />

            <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Converting volume units for applications like liquid measurements or spatial calculations.
            </p>

            <Card className="w-full">
                <CardHeader>
                </CardHeader>
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
                        <Select
                            value={toUnit}
                            onValueChange={(value) => {
                                setToUnit(value);
                                setResult('');
                            }}
                        >
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
                            placeholder="Insert value"
                        />
                    </div>

                    <button
                        className="w-full bg-wise-primary text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                        onClick={handleConvert}
                    >
                        Convert
                    </button>

                    {result && (
                        <div className="mt-4 p-3 bg-gray-100 rounded-md">
                            <p className="text-center font-medium">Result: {result}</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </section>
    );
};

export default VolumeConverter;
