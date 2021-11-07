# [范围求和 ||](https://leetcode-cn.com/problems/range-addition-ii/)

给定一个初始元素全部为 0，大小为 m*n 的矩阵 M 以及在 M 上的一系列更新操作。

操作用二维数组表示，其中的每个操作用一个含有两个正整数 a 和 b 的数组表示，含义是将所有符合 0 <= i < a 以及 0 <= j < b 的元素 M[i][j] 的值都增加 1。

在执行给定的一系列操作后，你需要返回矩阵中含有最大整数的元素个数。

**示例 1:**

```text
输入:
m = 3, n = 3
operations = [[2,2],[3,3]]
输出: 4
解释:
初始状态, M =
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]

执行完操作 [2,2] 后, M =
[[1, 1, 0],
 [1, 1, 0],
 [0, 0, 0]]

执行完操作 [3,3] 后, M =
[[2, 2, 1],
 [2, 2, 1],
 [1, 1, 1]]

M 中最大的整数是 2, 而且 M 中有4个值为2的元素。因此返回 4。
```

**注意:**

- m 和 n 的范围是 [1,40000]。
- a 的范围是 [1,m]，b 的范围是 [1,n]。
- 操作数目不超过 10000。

## 算法1

**解题思路：**

由于每次都是对 0 \leq i < a0≤i<a 和 0 \leq j < b0≤j<b 进行操作，因此每次操作都会包含点 (0, 0)(0,0)，最后的最大值一定出现在位置 (0, 0)(0,0) 上。

问题转换为：什么范围内的数与位置 (0, 0)(0,0) 上的值相等，即什么范围会被每一次操作所覆盖。

不难发现，在所有的 ops[i]ops[i] 中的横纵坐标 (x, y)(x,y) 与左上角 (0, 0)(0,0) 形成的区域面积可确保被每次操作覆盖，x * yx∗y 即是答案。

```c++
#include <vector>

template <typename T>
class Solution {
public:
  static T maxCount(T m, T n, std::vector<std::vector<T>>& ops) {
    T mina = m;
    T minb = n;
    for (const std::vector<T>& op: ops) {
      mina = std::min(mina, op[0]);
      minb = std::min(minb, op[1]);
    }
    return mina * minb;
  }
};
```
