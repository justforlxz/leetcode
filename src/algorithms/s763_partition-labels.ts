function partitionLabels(S: string): number[] {
    let s = S.split('');
    let ans: number[] = [];
    let d = new Map(s.map((v, k) => [v, k]));
    let l = -1;
    let r = 0;

    s.forEach((char, index) => {
        // 每次都计算最远的索引,扩张子串
        r = Math.max(r, d.get(char) ?? -1)
        // r 是最远的索引,如果index和最远的索引一样,就说明子串满足要求.
        if (index === r) {
            ans.push(r - l)
            l = index
        }
    });

    return ans;
};

export default partitionLabels;
