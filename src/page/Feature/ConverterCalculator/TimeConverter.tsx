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

const TimeConverter = () => {
    const { theme } = changeThemeStore();
    const [fromUnit, setFromUnit] = useState('hour');
    const [toUnit, setToUnit] = useState('minute');
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');

    const conversions: any = {
        // Hour to Minute and Second
        hour: {
            minute: (value: number) => value * 60,
            second: (value: number) => value * 3600,
        },
        // Day to Hour
        day: {
            hour: (value: number) => value * 24,
        },
        // Week to Day
        week: {
            day: (value: number) => value * 7,
        },
        // Month to Day (using average 30.44 days per month)
        month: {
            day: (value: number) => value * 30.44,
        },
        // Year to Day
        year: {
            day: (value: number) => value * 365,
        }
    };

    const unitOptions = [
        { value: 'hour', label: 'Hour' },
        { value: 'day', label: 'Day' },
        { value: 'week', label: 'Week' },
        { value: 'month', label: 'Month' },
        { value: 'year', label: 'Year' },
    ];

    const getTargetUnits = (sourceUnit: string) => {
        switch (sourceUnit) {
            case 'hour':
                return [
                    { value: 'minute', label: 'Minute' },
                    { value: 'second', label: 'Second' }
                ];
            case 'day':
                return [{ value: 'hour', label: 'Hour' }];
            case 'week':
                return [{ value: 'day', label: 'Day' }];
            case 'month':
                return [{ value: 'day', label: 'Day' }];
            case 'year':
                return [{ value: 'day', label: 'Day' }];
            default:
                return [];
        }
    };

    const getUnitLabel = (unit: string, value: number) => {
        console.log(value);
        switch (unit) {
            case 'minute':
                return 'minutes';
            case 'second':
                return 'seconds';
            case 'hour':
                return 'hours';
            case 'day':
                return 'days';
            default:
                return unit;
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
            const unitLabel = getUnitLabel(toUnit, convertedValue);
            setResult(`${convertedValue.toLocaleString()} ${unitLabel}`);
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
            <BackNavigation title="Time Converter" to="/features" />

            <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Converting time units for calculations or precise scheduling.
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

export default TimeConverter;
