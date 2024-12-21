import { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
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

const TemperatureConverter = () => {
    const { theme } = changeThemeStore();
    const [fromUnit, setFromUnit] = useState('celsius');
    const [toUnit, setToUnit] = useState('fahrenheit');
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');

    const conversions: any = {
        // Celsius to Fahrenheit and Kelvin
        celsius: {
            fahrenheit: (value: number) => (value * 9 / 5) + 32,
            kelvin: (value: number) => value + 273.15,
        },
        // Fahrenheit to Celsius
        fahrenheit: {
            celsius: (value: number) => (value - 32) * 5 / 9,
        },
        // Kelvin to Celsius
        kelvin: {
            celsius: (value: number) => value - 273.15,
        }
    };

    const unitOptions = [
        { value: 'celsius', label: 'Celsius' },
        { value: 'fahrenheit', label: 'Fahrenheit' },
        { value: 'kelvin', label: 'Kelvin' },
    ];

    const getTargetUnits = (sourceUnit: string) => {
        switch (sourceUnit) {
            case 'celsius':
                return [
                    { value: 'fahrenheit', label: 'Fahrenheit' },
                    { value: 'kelvin', label: 'Kelvin' }
                ];
            case 'fahrenheit':
                return [{ value: 'celsius', label: 'Celsius' }];
            case 'kelvin':
                return [{ value: 'celsius', label: 'Celsius' }];
            default:
                return [];
        }
    };

    const getUnitSymbol = (unit: string) => {
        switch (unit) {
            case 'celsius':
                return '°C';
            case 'fahrenheit':
                return '°F';
            case 'kelvin':
                return 'K';
            default:
                return '';
        }
    };

    const handleConvert = () => {
        if (!inputValue) {
            setResult('');
            return;
        }

        const value = parseFloat(inputValue);
        if (isNaN(value)) {
            setResult('Input is invalid');
            return;
        }

        const conversionFunction = conversions[fromUnit as keyof typeof conversions]?.[toUnit as any];
        if (conversionFunction) {
            const convertedValue = conversionFunction(value);
            const unitSymbol = getUnitSymbol(toUnit);
            setResult(`${convertedValue.toFixed(2)} ${unitSymbol}`);
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
            <BackNavigation title="Temperature Converter" to="/features" />

            <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Converting temperature units for various scientific or everyday applications.
            </p>

            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="text-center"></CardTitle>
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
                                <SelectValue placeholder="Choose a unit" />
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
                                <SelectValue placeholder="Choose a unit" />
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
                            placeholder="Enter a value"
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

export default TemperatureConverter;
