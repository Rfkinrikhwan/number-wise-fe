import { TableFormat } from "@/lib/Adapter";
import ParserError from "@/lib/model/ParserError";
import { ReactNode, useEffect, useState } from "react";

interface ExpressionInputInfoMessageProps {
    evaluatedExpression: TableFormat;
}

const ExpressionInputInfoMessage = ({ evaluatedExpression }: ExpressionInputInfoMessageProps) => {
    const [message, setMessage] = useState<ReactNode>(null);

    useEffect(() => {
        if (evaluatedExpression instanceof ParserError) {
            if (evaluatedExpression.position === undefined) {
                setMessage(<span>{evaluatedExpression.message}</span>);
                return;
            }

            setMessage(
                <span>
                    {evaluatedExpression.message +
                        ": " +
                        evaluatedExpression.input.slice(0, evaluatedExpression.position)}
                    <span className="text-red-400">
                        {evaluatedExpression.input.slice(
                            evaluatedExpression.position,
                            evaluatedExpression.position + 1
                        )}
                    </span>
                    {evaluatedExpression.input.slice(
                        evaluatedExpression.position + 1,
                        evaluatedExpression.input.length
                    )}
                </span>
            );
        } else {
            setMessage("");
        }
    }, [evaluatedExpression]);

    return <div className="mt-1 h-7 self-center">{message}</div>;
};

export default ExpressionInputInfoMessage;
