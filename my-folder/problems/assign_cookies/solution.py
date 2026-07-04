class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        if len(s) == 0:
            return 0
        s = sorted(s)
        g = sorted(g)
        count = 0
        kid = 0
        greed = 0
        while kid < len(g) and greed < len(s):
            if g[kid] <= s[greed]:
                count += 1
                greed += 1
                kid += 1
            elif g[kid] > s[greed]:
                greed += 1
        return count

