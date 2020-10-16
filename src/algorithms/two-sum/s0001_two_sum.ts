const twoSum = (nums: number[], target: number): number[] => {
    // 缓存数组长度 避免反复读取
    const len: number = nums.length
    for (let i: number = 0; i < len; i++) {
        // 一个元素不可以重复，内部循环+1起避免自我重复
        for (let j: number = i + 1; j < len; j++) {
            // 如果两元素相加等同于目标，返回一对索引
            if (target === nums[i] + nums[j]) {
                return [i, j]
            }
        }
    }
    throw new TypeError('')
}

export { twoSum };
