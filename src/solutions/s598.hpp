#include <vector>

template <typename T>
class Solution {
public:
  static T maxCount(T m, T n, std::vector<std::vector<T>>& ops) {
    T mina = m;
    T minb = n;
    for (const std::vector<T>& op: ops) {
      mina = std::min(mina, op[0]);
      minb = std::min(minb, op[1]);
    }
    return mina * minb;
  }
};
