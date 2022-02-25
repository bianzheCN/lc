class Solution {
    int INF = Integer.MAX_VALUE;

    public int divide(int _a, int _b) {
        // 我们可以先记录最终结果的正负号
        // 然后将 dividend 和 divisor 都当成正数来处理
        long a = _a, b = _b;
        boolean flag = false;
        if ((a < 0 && b > 0) || (a > 0 && b < 0))
            flag = true;
        if (a < 0)
            a = -a;
        if (b < 0)
            b = -b;
        long l = 0, r = a;
        while (l < r) {
            long mid = l + r + 1 >> 1;
            if (mul(mid, b) <= a)
                l = mid;
            else
                r = mid - 1;
        }
        r = flag ? -r : r;
        if (r > INF || r < -INF - 1)
            return INF;
        return (int) r;
    }

    long mul(long a, long k) {
        long ans = 0;
        while (k > 0) {
            System.out.println(k);
            System.out.println("========");
            System.out.println(a);
            if ((k & 1) == 1)
                ans += a;
            k >>= 1;
            a += a;
        }
        return ans;
    }
}