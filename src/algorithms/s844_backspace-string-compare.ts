function* reversed(v: string) {
    for (let p = v.length - 1; p >= 0; --p) {
        for (let q = 0; v[p] === '#' || q; --p) {
            q += v[p] === '#' ? 1 : -1
        }
        yield v[p]
    }
}

function backspaceCompare(S: string, T: string): boolean {
    let s = reversed(S);
    let t = reversed(T);

    while (true) {
        let s_value = s.next().value;
        let t_value = t.next().value;

        if (s_value === t_value && s_value === undefined) {
            return true;
        }
        else if (s_value === t_value) {
            continue
        }
        else {
            return false;
        }
    }
}

export default backspaceCompare;
