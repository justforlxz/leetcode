#ifndef S11_HPP
#define S11_HPP

#include <gtest/gtest.h>
#include <map>

#include "solutions/s11.hpp"

TEST(leetcode, S11)
{
    std::map<std::vector<int>, int> check {
        {{1, 8, 6, 2, 5, 4, 8, 3, 7}, 49},
        {{1, 1}, 1},
        {{4, 3, 2, 1, 4}, 16},
        {{1, 2, 1}, 2},
    };

    for (auto pair : check) {
        EXPECT_EQ(Solution::maxArea(pair.first), pair.second);
    }
}

#endif
