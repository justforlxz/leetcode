#include <iostream>
#include <vector>

#include <iostream>
#include <vector>

class Solution
{
public:
    int maxArea(const std::vector<int> &height) {
        size_t lp = 0;
        size_t rp = height.size() - 1;
        size_t ans = 0;
        while (lp < rp) {
            size_t area = std::min(height[lp], height[rp]) * (rp - lp);
            ans = std::max(ans, area);
            if (height[lp] < height[rp]) {
                ++lp;
            }
            else {
                --rp;
            }
        }

        return ans;
    }
};

int main()
{
    const std::vector<int> height{1, 8, 6, 2, 5, 4, 8, 3, 7};
    std::cout << Solution().maxArea(height);
}
