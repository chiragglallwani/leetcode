class Solution:
    
    def reverseStr(self, s: str, k: int) -> str:
        if len(s) < k:
            return s[::-1]
        s = list(s)
        def reverseArrange(subStr: list(str)):
            return subStr[::-1]
        count = 0
        while count < len(s):
            s[count:count + k] = reverseArrange(s[count:count + k])
            count += (2*k)
        
        return "".join(s)