function isValid(s){
    const stack = [];
    const pair = {
        '(': ')',
        '{': '}',
        '[': ']'
       
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '['){
            stack.push(char);
        } else{
            const top = stack.pop();
            if (pair[top] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isValid("()"))