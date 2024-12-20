import { TableDataType } from "@/lib/Adapter";
import clsx from "clsx";

interface TableDataProps {
    data: TableDataType;
}

const TableData = ({ data }: TableDataProps) => {
    return (
        <td
            scope="row"
            className={clsx(
                "whitespace-nowrap px-6 py-3 text-center font-medium",
                data.type === "expression" &&
                "border-l-[1px] border-neutral-400 dark:border-neutral-600"
            )}
        >
            {data.value ? "T" : "F"}
        </td>
    );
};

export default TableData;
