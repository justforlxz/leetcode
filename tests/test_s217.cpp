#include <gtest/gtest.h>
#include <map>

#include "solutions/s217.hpp"

TEST(leetcode, S217) {
	std::map<std::vector<int>, bool> check{
		{{1,2,3,1}, true},
		{{1,2,3,4}, false},
		{{1,1,1,3,3,4,3,2,4,2}, true},
	};

	for (const auto& pair : check) {
		EXPECT_EQ(Solution::containsDuplicate<int>(pair.first), pair.second);
	}
}
