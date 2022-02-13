/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    const ret = [intervals[0]]
    
    for (let i = 1; i < intervals.length; i++) {
        const cur = intervals[i]
        const last = ret[ret.length - 1] 
        // update, add, N
        if (cur[0] > last[1]) {
            ret.push(cur)
        } else {
            last[1] = Math.max(last[1], cur[1])
        }
    }
    
    return ret
};