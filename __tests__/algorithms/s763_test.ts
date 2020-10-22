import valid from '../../src/algorithms/s763_partition-labels'

test("763 partition labels", () => {
    expect(valid("ababcbacadefegdehijhklij")).toEqual([9, 7, 8]);
    expect(valid("abababababab")).toEqual([12]);
    expect(valid("")).toEqual([]);
});
