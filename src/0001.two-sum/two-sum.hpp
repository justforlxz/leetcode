#include <map>
#include <vector>

namespace _leetcode {
class TwoSum {
public:
    TwoSum() {}
    ~TwoSum() {}

    std::vector<int> twoSum(const std::vector<int> &nums, int target)
    {
        std::vector<int> result;
        std::map<int, int>   map;
        const int length = nums.size();

        for (int i = 0; i <= length; map[target - nums[i - 1]] = i++) {
           auto v = nums[i - 1];
            if (map.count(nums[i])) {
                result.push_back(map[nums[i]]);
                result.push_back(i);
                return result;
            }
        }

        return result;
    }
};
}  // namespace _leetcode
