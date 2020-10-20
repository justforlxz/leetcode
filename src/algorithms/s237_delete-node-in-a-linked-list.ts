import { ListNode } from '../common/ListNode'

function deleteNode(root: ListNode | null): void {
    if (root === null) {
        return;
    }

    let head: ListNode | null = root;
    let previous: ListNode | null = root;

    while (head.next) {
        previous = head;
        head.val = head.next.val;
        head = head.next;
    }

    previous.next = null;
};

export { deleteNode }
