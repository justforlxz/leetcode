pub struct Solution {}

use std::boxed::Box;
use std::option::Option;

//Definition for singly-linked list.
#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

impl Solution {
    pub fn add_two_numbers(
        l1: Option<Box<ListNode>>,
        l2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        let mut carry: i32 = 0;
        let mut list_node = ListNode::new(0);
        let mut p1 = l1.as_ref();
        let mut p2 = l2.as_ref();
        let mut p3 = &mut list_node;

        while p1.is_some() || p2.is_some() {
            let mut sum = carry; //上一次的进位

            if let Some(n1) = p1 {
                sum += n1.val;
                p1 = n1.next.as_ref();
            }

            if let Some(n2) = p2 {
                sum += n2.val;
                p2 = n2.next.as_ref();
            }

            carry = sum / 10;
            let new_node = ListNode::new(sum % 10);
            p3.next = Some(Box::new(new_node));
            p3 = p3.next.as_mut().unwrap();
        }

        if carry > 0 {
            p3.next = Some(Box::new(ListNode::new(carry)));
        }

        return list_node.next;
    }
}
