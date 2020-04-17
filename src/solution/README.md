# 两数之和算法说明

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

# 算法

```
    std::vector<int> twoSum(const std::vector<int> &nums, int target)
    {
        std::vector<int> result;
        std::map<int, int>   map;
        const int length = nums.size();

        for (int i = 0; i <= length; map[target - nums[i - 1]] = i++) {
            if (map.count(nums[i])) {
                result.push_back(map[nums[i]]);
                result.push_back(i);
                return result;
            }
        }

        return result;
    }
```

在该函数中，最重要的算法思路是迭代时保存target与当前值的商和对应的下标，并在迭代内查询map是否保存有当前的商，如果存在，知道了当前值的下标和另一个数的下标，即得到了两数之和为target时的下标。

```
map[target - nums[i - 1]] = i++
```

第一次迭代中不保存任何值。
第二次迭代中，target - nums[0]的结果是与nums第一个元素对应的数,然后value保存为i++，即map[target - 2] = 0;
第三次迭代中，target - nums[1]的结果是另外的一个数，保存到map中，map[target - 7] = 1;

此时迭代中的if就可以判断出map[7]已经存在了，就可以返回保存的0下标，对应的是第一个数2,然后返回当前的下标，7对应的1;
