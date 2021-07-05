
#pragma once

#include <vector>
#include <unordered_map>

namespace Solution {
std::vector<int> twoSum(std::vector<int> &nums, int target)
{
    std::unordered_map<int, int> hashtable;
    for (int i = 0; i < nums.size(); ++i) {
        auto it = hashtable.find(target - nums[i]);
        if (it != hashtable.end()) {
            return {it->second, i};
        }
        hashtable[nums[i]] = i;
    }
    return {};
}
} // namespace Solution
