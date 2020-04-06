#include "two-sum.hpp"

#include <cassert>

int main(int argc, char const *argv[])
{
    _leetcode::TwoSum twoSum;
    std::vector<int> result = twoSum.twoSum(std::vector<int>({2, 7, 11, 15}), 9);

    assert(result[0] == 0 && result[1] == 1);

    return 0;
}
