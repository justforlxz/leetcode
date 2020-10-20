import { ListNode } from '../../src/common/ListNode'

test("list node", () => {
    expect((new ListNode()).val).toEqual(0);
    expect((new ListNode()).next).toEqual(null);
    expect((new ListNode(-1, { val: -2, next: null })).next).toEqual({
        val: -2,
        next: null
    } as ListNode);
});
