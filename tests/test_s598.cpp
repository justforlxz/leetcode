#ifndef S598_HPP
#define S598_HPP

#include <gtest/gtest.h>
#include "solutions/s598.hpp"

TEST(leetcode, S598)
{
  std::vector<std::vector<int>> check{
    {2,2},
    {3,3},
  };

  EXPECT_EQ(Solution<int>::maxCount(3, 3, check), 4);
}

#endif
