#ifndef S1_HPP
#define S1_HPP

#include <gtest/gtest.h>

#include "solutions/s1.hpp"

struct Data {
    std::vector<int> nums;
    std::vector<int> check;
    int target;
};

TEST(leetcode, S1)
{
    std::vector<Data> check {
        {{2, 7, 11, 15}, {0, 1}, 9},
        {{3, 2, 4}, {1, 2}, 6},
        {{3, 3}, {0, 1}, 6},
        {{2, 7, 11, 15}, {}, 1},
    };

    for (Data &d : check) {
        EXPECT_EQ(Solution::twoSum(d.nums, d.target), d.check);
    }
}

#endif // S1_HPP
