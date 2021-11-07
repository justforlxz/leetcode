#include <vector>

namespace Solution {
    template <typename T>
    bool containsDuplicate(const std::vector<T>& nums) {
        std::vector<T> vectors = nums;
        std::sort(vectors.begin(), vectors.end());
        size_t n = vectors.size();
        for (int i = 0; i < n; i++) {
            if (vectors[i] == vectors[i + 1]) {
                return true;
            }
        }
        return false;
    }
}
