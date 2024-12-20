import { useEffect, useReducer, useState } from "react";
import ExpressionInputInfoMessage from "@/components/input/ExpressionInputInfoMessage";
import ExpressionInputQuickButtons from "@/components/input/ExpressionInputQuickButtons";
import Table from "@/components/table/Table";
import ExpressionInput from "@/components/input/ExpressionInput";
import { evaluate, TableFormat } from "@/lib/Adapter";
import { changeThemeStore } from "@/store";
import HelpModal from "@/components/custom/HelpModal";

const TruthTable = () => {
    const [evaluatedExpressionInTableFormat, setEvaluatedExpressionInTableFormat] =
        useState<TableFormat>([]);
    const [reverseOrder, setReverseOrder] = useState<boolean>(false);
    const { theme } = changeThemeStore();
    const [modalOpen, setModalOpen] = useState(false);

    const [input, setInput] = useReducer((state: string, value: string): string => {
        console.log(state)
        location.replace("#" + encodeURI(value));
        window.localStorage.setItem(
            import.meta.env.VITE_BASE_URL ?? "input",
            value
        );
        return value;
    }, "");

    // Try to pre-input the expression by checking URL params and local storage.
    useEffect(() => {
        const urlHashValue = decodeURI(location.hash.slice(1));
        const localStorageValue = window.localStorage.getItem(
            import.meta.env.VITE_BASE_URL ?? "input"
        );

        const value = urlHashValue === "" ? localStorageValue : urlHashValue;

        setInput(value ?? "");
    }, []);

    // Update table when input changes
    useEffect(() => {
        // TODO don't auto-generate table if input has more than xxx variables
        setEvaluatedExpressionInTableFormat(evaluate(input, reverseOrder));
    }, [input, reverseOrder]);

    return (
        <section className={`${theme === "dark" ? "bg-wise-dark" : ""} flex flex-col min-h-screen gap-10 px-4 py-6 sm:px-12 md:px-24 lg:px-48`}>
            <HelpModal isOpen={modalOpen} close={() => setModalOpen(false)} />
            <div className="flex flex-col">
                <ExpressionInput
                    input={input}
                    setInput={setInput}
                    openHelpModal={() => setModalOpen(true)}
                />

                <ExpressionInputInfoMessage
                    evaluatedExpression={evaluatedExpressionInTableFormat}
                />

                <ExpressionInputQuickButtons
                    inputModifier={(buttonText: string) => {
                        if (buttonText === " ") {
                            setInput(input.substring(0, input.length - 1));
                        } else {
                            setInput(input + buttonText);
                        }
                    }}
                />

                <Table
                    tableData={evaluatedExpressionInTableFormat}
                    setReverseOrder={setReverseOrder}
                />
            </div>
        </section>
    );
};

export default TruthTable;
