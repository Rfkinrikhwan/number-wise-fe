import { cn } from "@/lib/utils";
import { changeThemeStore } from "@/store";

interface ExpressionInputQuickButtonsProps {
    inputModifier: any;
}

const ExpressionInputQuickButtons = ({ inputModifier }: ExpressionInputQuickButtonsProps) => {
    const { theme } = changeThemeStore();

    const buttons = [
        "¬",
        "∧",
        "⊼",
        "∨",
        "⊽",
        "→",
        "↔",
        "⇹",
        "(",
        ")",
        ",",
        "0",
        "1",
        "A",
        "B",
        "C",
        "D",
        "E",
    ];

    return (
        <div className="grid grid-cols-5 md:flex md:flex-row md:flex-wrap md:justify-between gap-2 md:gap-2">
            {buttons.map((buttonText: string) => {
                return (
                    <button
                        type="button"
                        key={buttonText}
                        onClick={() => inputModifier(buttonText)}
                        className={
                            `grid h-14 w-14 place-items-center rounded-lg p-2.5 text-xl font-medium border
                            ${theme === "light" ? "border-wise-primary text-wise-primary" : "border-wise-secondary text-wise-secondary"}`
                        }
                    >
                        {buttonText}
                    </button>
                );
            })}
        </div>
    );
};

export default ExpressionInputQuickButtons;
