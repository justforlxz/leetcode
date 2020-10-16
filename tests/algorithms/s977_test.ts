import { sortedSquaresV1, sortedSquaresV2 } from '../../src/algorithms/s977_squares-of-a-sorted-array'

test("s997 squares of a sorted array", () => {
    expect(sortedSquaresV1([0, 1, 3, 4, 10])).toEqual([0, 1, 9, 16, 100]);
    expect(sortedSquaresV1([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
    expect(sortedSquaresV2([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
    expect(sortedSquaresV2([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
});
