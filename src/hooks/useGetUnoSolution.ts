import { useState, useEffect, useCallback } from "react";

type ResponseType = {
  solution: boolean;
  equation: string;
};

const useGetUnoSolution = ({ cards }: { cards: { value: number }[] }) => {
  const [data, setData] = useState<ResponseType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const operators = ["+", "-", "*", "/"];

  // const calculate = (a: number, b: number, operator: string): number | null => {
  //   switch (operator) {
  //     case "+":
  //       return a + b;
  //     case "-":
  //       return a - b;
  //     case "*":
  //       return a * b;
  //     case "/":
  //       return b !== 0 ? a / b : null; // Hindari pembagian oleh nol
  //     default:
  //       return null;
  //   }
  // };

  const findSolution = (numbers: number[]): ResponseType => {
    // const n = numbers.length;

    const permute = (arr: number[]): number[][] => {
      if (arr.length <= 1) return [arr];
      return arr.flatMap((v, i) =>
        permute([...arr.slice(0, i), ...arr.slice(i + 1)]).map((p) => [v, ...p])
      );
    };

    const allPermutations = permute(numbers);

    for (const perm of allPermutations) {
      for (const op1 of operators) {
        for (const op2 of operators) {
          for (const op3 of operators) {
            // Semua kombinasi tanda kurung
            const expressions = [
              `(${perm[0]} ${op1} ${perm[1]}) ${op2} (${perm[2]} ${op3} ${perm[3]})`,
              `((${perm[0]} ${op1} ${perm[1]}) ${op2} ${perm[2]}) ${op3} ${perm[3]}`,
              `(${perm[0]} ${op1} (${perm[1]} ${op2} ${perm[2]})) ${op3} ${perm[3]}`,
              `${perm[0]} ${op1} ((${perm[1]} ${op2} ${perm[2]}) ${op3} ${perm[3]})`,
              `${perm[0]} ${op1} (${perm[1]} ${op2} (${perm[2]} ${op3} ${perm[3]}))`,
            ];

            for (const expr of expressions) {
              try {
                if (Math.abs(eval(expr) - 24) < 1e-6) {
                  return { solution: true, equation: expr };
                }
              } catch {
                // Abaikan jika terjadi kesalahan (misalnya pembagian oleh nol)
              }
            }
          }
        }
      }
    }

    return { solution: false, equation: "" };
  };

  const fetchSolution = useCallback(() => {
    setIsLoading(true);
    try {
      const numbers = cards.map((card) => card.value);
      const result = findSolution(numbers);
      setData(result);
      setIsSuccess(result.solution);
    } catch (error) {
      console.error("Error finding solution:", error);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  }, [cards]);

  useEffect(() => {
    if (cards.length > 0) {
      fetchSolution();
    }
  }, [cards, fetchSolution]);

  const refetch = () => {
    fetchSolution();
  };

  return { data, isLoading, isSuccess, refetch };
};

export default useGetUnoSolution;
