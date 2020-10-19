import { ListNode, deleteNode } from '../../src/algorithms/s237_delete-node-in-a-linked-list'

function converNumberListToListNode(data: number[]): ListNode[] {
    let testData: ListNode[] = [];
    data.forEach((val, index) => {
        let node: ListNode | null = {
            val: val,
            next: null
        }

        if (testData.length) {
            testData[index - 1].next = node;
        }

        testData.push(node);
    });

    return testData;
}

function converListNodeToArray(node: ListNode): ListNode[] {
    let list: ListNode[] = [];
    let head: ListNode | null = node;

    while (head != null) {
        list.push(head);
        head = head.next;
    }

    return list;
}

test("237 delete node in alinked list", () => {
    let array = converNumberListToListNode([4, 5, 1, 9]);
    let result_array = converNumberListToListNode([4, 5, 9]);

    // remove element
    deleteNode(array[2]);

    expect(converListNodeToArray(array[0])).toEqual(result_array);

    // remove null
    deleteNode(null);

    expect((new ListNode()).val).toEqual(0);
    expect((new ListNode()).next).toEqual(null);
    expect((new ListNode(-1, {val: -2, next: null})).next).toEqual({
        val: -2,
        next: null
    } as ListNode);
});
