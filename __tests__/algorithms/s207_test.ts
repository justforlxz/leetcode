import { reverseList } from '../../src/algorithms/s207_reverse-linked-list'
import { ListNode } from '../../src/common/ListNode'

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

function* reversed(v: ListNode | null) {
    let head = v;
    while (head) {
        yield head.val;
        head = head.next;
    }
}

let testData = converNumberListToListNode([1, 2, 3, 4, 5]);
let validData = converNumberListToListNode([5, 4, 3, 2, 1])

test("207 reverse linked list", () => {
    let t_generator = reversed(reverseList(testData[0]));
    let v_generator = reversed(validData[0]);

    while (true) {
        let head = t_generator.next().value;
        let valid = v_generator.next().value;

        if (head === valid && head === undefined) {
            break;
        }

        expect(head).toEqual(valid);
    }
});
