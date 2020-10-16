import valid from '../../src/algorithms/s20_valid-parentheses'

test("s20 valid parentheses", () => {
    expect(valid("()")).toEqual(true);
    expect(valid("()[]{}")).toEqual(true);
    expect(valid("(]")).toEqual(false);
    expect(valid("([)]")).toEqual(false);
    expect(valid("{[]}")).toEqual(true);
});
