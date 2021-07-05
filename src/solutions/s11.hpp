#pragma once

#include <iostream>
#include <vector>

#include <iostream>
#include <vector>

namespace Solution {
int maxArea(const std::vector<int> &height)
{
    size_t lp = 0;
    size_t rp = height.size() - 1;
    size_t ans = 0;
    while (lp < rp) {
        size_t area = std::min(height[lp], height[rp]) * (rp - lp);
        ans = std::max(ans, area);
        if (height[lp] < height[rp]) {
            ++lp;
        } else {
            --rp;
        }
    }

    return ans;
}
} // namespace Solution
