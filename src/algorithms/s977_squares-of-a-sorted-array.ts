function sortedSquaresV1(A: number[]): number[] {
    return A.map(t => Math.pow(t, 2)).sort((a, b) => a - b);
};

function sortedSquaresV2(A: number[]): number[] {
    let length = A.length;
    let result = [];
    let begin = 0;
    let last = length - 1;
    let index = length - 1;

    while (begin <= last) {
        let a = Math.pow(A[begin], 2);
        let b = Math.pow(A[last], 2);
        if (a > b) {
            result[index] = a;
            begin++;
        }
        else {
            result[index] = b;
            last--;
        }
        index--;
    }

    return result;
};

export { sortedSquaresV1, sortedSquaresV2 };
