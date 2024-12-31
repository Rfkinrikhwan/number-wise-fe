export type Question = {
    question: string;
    answers: number[];
    correctAnswer: number;
};

export function generateQuestion(): Question {
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let num1, num2, correctAnswer: number = 0;

    switch (operation) {
        case '+':
            num1 = Math.floor(Math.random() * 20) + 1;
            num2 = Math.floor(Math.random() * 20) + 1;
            correctAnswer = num1 + num2;
            break;
        case '-':
            num1 = Math.floor(Math.random() * 20) + 1;
            num2 = Math.floor(Math.random() * num1) + 1;
            correctAnswer = num1 - num2;
            break;
        case '*':
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            correctAnswer = num1 * num2;
            break;
        case '/':
            correctAnswer = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            num1 = num2 * correctAnswer;
            break;
        default:
            num1 = Math.floor(Math.random() * 20) + 1;
            num2 = Math.floor(Math.random() * 20) + 1;
            correctAnswer = num1 + num2;
            break;
    }

    const question = `${num1} ${operation} ${num2}`;
    const answers = [correctAnswer];

    while (answers.length < 4) {
        const wrongAnswer = Math.floor(Math.random() * 100) + 1;
        if (!answers.includes(wrongAnswer)) {
            answers.push(wrongAnswer);
        }
    }

    return {
        question,
        answers: answers.sort(() => Math.random() - 0.5),
        correctAnswer,
    };
}

