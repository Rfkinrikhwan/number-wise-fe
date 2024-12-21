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

const MassConverter = () => {
    const { theme } = changeThemeStore();
    const [fromUnit, setFromUnit] = useState('kilogram');
    const [toUnit, setToUnit] = useState('gram');
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');

    const conversions: any = {
        // Kilogram ke Gram
        kilogram: {
            gram: (value: number) => value * 1000,
        },
        // Gram ke Miligram
        gram: {
            milligram: (value: number) => value * 1000,
        },
        // Pon ke Kilogram (1 pound = 0.453592 kg)
        pound: {
            kilogram: (value: number) => value * 0.453592,
        },
        // Ton ke Kilogram (1 metric ton = 1000 kg)
        ton: {
            kilogram: (value: number) => value * 1000,
        }
    };

    const unitOptions = [
        { value: 'kilogram', label: 'Kilogram' },
        { value: 'gram', label: 'Gram' },
        { value: 'pound', label: 'Pound' },
        { value: 'ton', label: 'Ton' },
    ];

    const getTargetUnits = (sourceUnit: string) => {
        switch (sourceUnit) {
            case 'kilogram':
                return [{ value: 'gram', label: 'Gram' }];
            case 'gram':
                return [{ value: 'milligram', label: 'Miligram' }];
            case 'pound':
                return [{ value: 'kilogram', label: 'Kilogram' }];
            case 'ton':
                return [{ value: 'kilogram', label: 'Kilogram' }];
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
            let unitSymbol = '';

            switch (toUnit) {
                case 'gram':
                    unitSymbol = 'g';
                    break;
                case 'milligram':
                    unitSymbol = 'mg';
                    break;
                case 'kilogram':
                    unitSymbol = 'kg';
                    break;
                default:
                    unitSymbol = toUnit;
            }

            setResult(`${convertedValue.toLocaleString('en-US')} ${unitSymbol}`);
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
            <BackNavigation title="Mass Converter" to="/features" />

            <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Converting weight or mass between units for purposes like logistics or health measurements.
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
                                <SelectValue placeholder="Choose unit" />
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
                                <SelectValue placeholder="Choose unit" />
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

export default MassConverter;
