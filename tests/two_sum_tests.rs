#[cfg(test)]
mod tests {
    use leetcode::solution::s0001_two_sum::Solution;
    #[test]
    fn two_sum_tests() {
        assert_eq!(vec![0, 1], Solution::two_sum(vec![2, 7, 11, 15], 9));
    }
}
