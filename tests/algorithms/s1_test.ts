import { twoSum } from '../../src/algorithms/s1_two_sum'

test('s0001 two sum', () => {
    let nums = [2, 7, 11, 15]
    let result = twoSum(nums, 9);
    expect(result[0]).toBe(0);
    expect(result[1]).toBe(1);

    expect(() => {
        twoSum(nums, 0)
    }).toThrow(TypeError);
});