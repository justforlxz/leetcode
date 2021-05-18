pub struct Solution {}

impl Solution {
    pub fn is_valid(s: String) -> bool {
        let mut stack: Vec<char> = Vec::new();
        for ch in s.chars().into_iter() {
            match stack.last() {
                None => {}
                Some(&last) => {
                    if Solution::pair(last, ch) {
                        stack.pop();
                        continue;
                    }
                }
            }
            stack.push(ch);
        }
        stack.is_empty()
    }

    #[inline(always)]
    fn pair(open: char, close: char) -> bool {
        (open == '{' && close == '}')
            || (open == '(' && close == ')')
            || (open == '[' && close == ']')
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_20() {
        assert_eq!(Solution::is_valid("()[]{}".to_string()), true);
    }
}
