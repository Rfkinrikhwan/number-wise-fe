import Term from "./Term";


export default class BooleanTerm extends Term {
    private symbol: string;

    constructor(symbol: string) {
        super(null, null);

        this.symbol = symbol;
    }

    public eval(variableAssignment: Map<string, boolean>): boolean {
        console.log(variableAssignment)
        return this.symbol === "1";
    }

    public toString(): string {
        return this.symbol;
    }
}
