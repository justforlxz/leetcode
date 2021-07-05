#ifndef S2_HPP
#define S2_HPP

#include <gtest/gtest.h>
#include <numeric>
#include <vector>

TEST(leetcode, S2) {
    std::vector<int> vec{1, 2, 3, 4, 5};
    int sum = std::accumulate(vec.begin(), vec.end(), 0);
    EXPECT_EQ(sum, 15);
}

#endif
