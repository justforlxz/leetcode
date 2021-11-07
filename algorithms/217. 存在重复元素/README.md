# []

给定一个整数数组，判断是否存在重复元素。

如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

**示例 1:**

``` text
输入: [1,2,3,1]
输出: true
```

**示例 2:**

``` text
输入: [1,2,3,4]
输出: false
```

**示例 3:**

``` text
输入: [1,1,1,3,3,4,3,2,4,2]
输出: true
```

## 算法1

``` c++
#include <vector>

namespace Solution {
    template <typename T>
    bool containsDuplicate(const std::vector<T>& nums) {
    std::vector<T> vectors = nums;
        std::sort(vectors.begin(), vectors.end());
        size_t n = vectors.size();
        for (int i = 0; i < n; i++) {
            if (vectors[i] == vectors[i + 1]) {
                return true;
            }
        }
        return false;
    }
}
```

线排序数据，如果存在相邻的两个相同元素，则匹配成功。
