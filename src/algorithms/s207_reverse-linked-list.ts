import { ListNode } from '../common/ListNode'

function reverseList(node: ListNode | null): ListNode | null {
    let head = node;
    let previous: ListNode | null = null;

    while (head) {
        [head.next, previous, head] = [previous, head, head.next];
    }

    return previous;
};

export { reverseList };
