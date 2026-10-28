class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const p = { "]": "[", "}": "{", ")": "(" };
        let stack = [];
        for(let char of s){
            if(char in p){
                if(stack.length===0 || stack.pop()!=p[char]){
                    return false;
                }
            }
            else{
                    stack.push(char);
                }
        }
        return stack.length===0;
    }
}
