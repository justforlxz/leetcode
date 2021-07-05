#ifndef S1_HPP
#define S1_HPP

#include <gtest/gtest.h>
#include <numeric>
#include <vector>

TEST(leetcode, S1) {
    std::vector<int> vec{1, 2, 3, 4, 5};
    int sum = std::accumulate(vec.begin(), vec.end(), 0);
    EXPECT_EQ(sum, 15);
}

#endif // S1_HPP
