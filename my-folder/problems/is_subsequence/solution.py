class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        sptr, tptr = 0, 0
        tlen = len(t)
        slen = len(s)

        while tptr < tlen:
            if sptr < slen and s[sptr] == t[tptr]:
                sptr +=1
            tptr += 1
        return True if sptr == slen else False