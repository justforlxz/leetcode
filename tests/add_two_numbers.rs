#[cfg(test)]
mod tests {
    use leetcode::solution::s0002_add_two_numbers::ListNode;
    use leetcode::solution::s0002_add_two_numbers::Solution;
    use std::boxed::Box;

    #[test]
    fn add_two_numbers() {
        let l1_node: Option<Box<ListNode>> = Some(Box::new(ListNode {
            next: Some(Box::new(ListNode {
                next: Some(Box::new(ListNode { next: None, val: 2 })),
                val: 4,
            })),
            val: 3,
        }));

        let l2_node: Option<Box<ListNode>> = Some(Box::new(ListNode {
            next: Some(Box::new(ListNode {
                next: Some(Box::new(ListNode { next: None, val: 5 })),
                val: 6,
            })),
            val: 4,
        }));

        Solution::add_two_numbers(l1_node, l2_node);
    }
}
