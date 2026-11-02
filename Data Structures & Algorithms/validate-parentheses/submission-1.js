class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = { "]": "[", "}": "{", ")": "(" };
        let stack = [];
        for (const char of s) {
            if (char in pairs) {
                if (stack.length === 0 || stack.pop() !== pairs[char]) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }
        return stack.length === 0;
    }
}
