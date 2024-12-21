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
import { Label } from "@/components/ui/label";
import BackNavigation from '@/components/custom/BackNavigation';
import { changeThemeStore } from '@/store';

const NumberSystemConverter = () => {
    const { theme } = changeThemeStore();
    const [inputValue, setInputValue] = useState('');
    const [fromSystem, setFromSystem] = useState('decimal');
    const [result, setResult] = useState('');
    const [toSystem, setToSystem] = useState('binary');
    const [error, setError] = useState('');

    const isValidInput = (value: string, system: string): boolean => {
        const patterns = {
            decimal: /^[0-9]+$/,
            binary: /^[0-1]+$/,
            octal: /^[0-7]+$/,
            hexadecimal: /^[0-9A-Fa-f]+$/,
        };
        return patterns[system as keyof typeof patterns].test(value);
    };

    const convert = () => {
        if (!inputValue) {
            setError('Please enter a value');
            setResult('');
            return;
        }

        if (!isValidInput(inputValue, fromSystem)) {
            setError(`Invalid input for ${fromSystem} system`);
            setResult('');
            return;
        }

        setError('');
        let decimal: number;

        // Convert to decimal first
        switch (fromSystem) {
            case 'decimal':
                decimal = parseInt(inputValue, 10);
                break;
            case 'binary':
                decimal = parseInt(inputValue, 2);
                break;
            case 'octal':
                decimal = parseInt(inputValue, 8);
                break;
            case 'hexadecimal':
                decimal = parseInt(inputValue, 16);
                break;
            default:
                decimal = 0;
        }

        // Convert from decimal to the target system
        switch (toSystem) {
            case 'decimal':
                setResult(decimal.toString());
                break;
            case 'binary':
                setResult(decimal.toString(2));
                break;
            case 'octal':
                setResult(decimal.toString(8));
                break;
            case 'hexadecimal':
                setResult(decimal.toString(16).toUpperCase());
                break;
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
            <BackNavigation title="Number System Converter" to="/features" />

            <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Convert numerical values between different numeral systems for programming or mathematical applications.
            </p>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle></CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-4">
                        <div className="space-y-2">
                            <Label>From</Label>
                            <Select
                                value={fromSystem}
                                onValueChange={(value) => {
                                    setFromSystem(value);
                                    setInputValue('');
                                    setResult('');
                                    setError('');
                                }}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select number system" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="decimal">Decimal</SelectItem>
                                    <SelectItem value="binary">Binary</SelectItem>
                                    <SelectItem value="octal">Octal</SelectItem>
                                    <SelectItem value="hexadecimal">Hexadecimal</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label>To</Label>
                            <Select
                                value={toSystem}
                                onValueChange={(value) => {
                                    setToSystem(value);
                                    setResult('');
                                }}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select number system" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="decimal">Decimal</SelectItem>
                                    <SelectItem value="binary">Binary</SelectItem>
                                    <SelectItem value="octal">Octal</SelectItem>
                                    <SelectItem value="hexadecimal">Hexadecimal</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label>Enter Number</Label>
                            <Input
                                type="text"
                                value={inputValue}
                                onChange={(e) => {
                                    setInputValue(e.target.value);
                                    setError('');
                                    setResult('');
                                }}
                                placeholder={`Enter ${fromSystem} number`}
                                className="w-full"
                            />
                            {error && <p className="text-sm text-red-500">{error}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label>Result</Label>
                            <Input
                                type="text"
                                value={result}
                                readOnly
                                className="w-full bg-gray-50"
                                placeholder="Converted result will appear here"
                            />
                        </div>
                    </div>

                    <button
                        onClick={convert}
                        className="w-full bg-wise-primary text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Convert
                    </button>
                </CardContent>
            </Card>
        </section>
    );
};

export default NumberSystemConverter;

