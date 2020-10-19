 // Definition for singly-linked list.
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = val ?? 0;
         this.next = next ?? null;
     }
 }

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

export { ListNode, deleteNode }
