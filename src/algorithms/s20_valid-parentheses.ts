export default function isValid(s: string): boolean {
    let stack: string[] = [];
    let array = [...s];
    let parentheses = new Map([['(', ')'],['[', ']'], ['{', '}']]);
    let top: string | undefined;

    for (let item of array) {
        let value: string | undefined;
        if ((value = parentheses.get(item))) {
            stack.push(value);
        }
        else {
            top = stack.pop();
            if (top != item) {
                return false;
            }
        }
    }

    return !stack.length;
};
