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
import { Label } from "@/components/ui/label";
import BackNavigation from '@/components/custom/BackNavigation';
import { changeThemeStore } from '@/store';

const AngleConverter = () => {
    const { theme } = changeThemeStore();
    const [inputValue, setInputValue] = useState('');
    const [fromUnit, setFromUnit] = useState('degrees');
    const [toUnit, setToUnit] = useState('radians');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const isValidNumber = (value: string): boolean => {
        return !isNaN(Number(value));
    };

    const convertAngle = () => {
        if (!inputValue) {
            setError('Please enter a value');
            setResult('');
            return;
        }

        if (!isValidNumber(inputValue)) {
            setError('Input must be a number');
            setResult('');
            return;
        }

        setError('');
        const input = parseFloat(inputValue);
        let convertedValue: number;

        // Konversi ke radian terlebih dahulu
        const toRadians = (degrees: number) => degrees * (Math.PI / 180);
        const toDegrees = (radians: number) => radians * (180 / Math.PI);
        const gradiansToDegrees = (gradians: number) => gradians * 0.9;

        // Konversi berdasarkan unit yang dipilih
        switch (`${fromUnit}-${toUnit}`) {
            case 'degrees-radians':
                convertedValue = toRadians(input);
                break;
            case 'radians-degrees':
                convertedValue = toDegrees(input);
                break;
            case 'gradians-degrees':
                convertedValue = gradiansToDegrees(input);
                break;
            case 'degrees-degrees':
            case 'radians-radians':
            case 'gradians-gradians':
                convertedValue = input;
                break;
            default:
                if (toUnit === 'gradians') {
                    // Konversi ke gradian
                    const degrees = fromUnit === 'radians' ? toDegrees(input) : input;
                    convertedValue = degrees / 0.9;
                } else {
                    convertedValue = 0;
                }
        }

        // Format hasil dengan 6 angka desimal
        setResult(convertedValue.toFixed(6));
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section
            className={`${theme === "dark" ? "bg-wise-dark" : ""
                } flex flex-col min-h-screen gap-5 px-4 py-6 sm:px-12 md:px-24 lg:px-48`}
        >
            <BackNavigation title="Angle Converter" to="/features" />

            <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Converting angle units for applications like liquid measurements or spatial calculations.
            </p>
            <Card className="w-full">
                <CardHeader>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-4">
                        <div className="space-y-2">
                            <Label>From</Label>
                            <Select
                                value={fromUnit}
                                onValueChange={(value) => {
                                    setFromUnit(value);
                                    setInputValue('');
                                    setResult('');
                                    setError('');
                                }}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select an angle unit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="degrees">Degrees (°)</SelectItem>
                                    <SelectItem value="radians">Radians (rad)</SelectItem>
                                    <SelectItem value="gradians">Gradians (grad)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label>To</Label>
                            <Select
                                value={toUnit}
                                onValueChange={(value) => {
                                    setToUnit(value);
                                    setResult('');
                                }}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select an angle unit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="degrees">Degrees (°)</SelectItem>
                                    <SelectItem value="radians">Radians (rad)</SelectItem>
                                    <SelectItem value="gradians">Gradians (grad)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label>Enter Angle Value</Label>
                            <Input
                                type="number"
                                value={inputValue}
                                onChange={(e) => {
                                    setInputValue(e.target.value);
                                    setError('');
                                    setResult('');
                                }}
                                placeholder={`Enter value in ${fromUnit}`}
                                className="w-full"
                            />
                            {error && <p className="text-sm text-red-500">{error}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label>Result</Label>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="text"
                                    value={result}
                                    readOnly
                                    className="w-full bg-gray-50"
                                    placeholder="Result will appear here"
                                />
                                <span className="text-sm text-gray-500">
                                    {toUnit === 'degrees' ? '°' : toUnit === 'radians' ? 'rad' : 'grad'}
                                </span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={convertAngle}
                        className="w-full bg-wise-primary text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Convert
                    </button>
                </CardContent>
            </Card>
        </section>
    );
};

export default AngleConverter;
