import backspaceCompare from '../../src/algorithms/s844_backspace-string-compare';
import valid from '../../src/algorithms/s844_backspace-string-compare'

test("844. backspace-string-compare", () => {
    expect(valid("ab#c", "ad#c")).toEqual(true);
    expect(valid("", "")).toEqual(true);
    expect(valid("#", "")).toEqual(true);
    expect(valid("a####", "b###")).toEqual(true);
    expect(valid("####b", "#####a")).toEqual(false);
});
