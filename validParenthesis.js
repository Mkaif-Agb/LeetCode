/**
 * @param {string} s
 * @return {boolean}
 */
s = "()"
// Output: true


var isValid = function(s) {
    var stack = []
    var open = ['(', '{', '['] 
    var close = [')', '}', ']']

    for (var i; i<s.length; i++){
        var input = s[i];
        if (open.includes(input))
        {
            stack.push(input);
        }
        else if (close.includes(input)){
            const match = open[close.indexof(input)];
            if (stack.length === 0 || stack.pop() !== match){
                return false
            }
        }
    }
    return stack.length === 0;
};
result = isValid(s)
console.log(result);



function isValidParentheses(str) {
  const stack = [];
  const openingParentheses = ['(', '{', '['];
  const closingParentheses = [')', '}', ']'];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (openingParentheses.includes(char)) {
      stack.push(char);
    } else if (closingParentheses.includes(char)) {
      const matchingOpeningParenthesis = openingParentheses[closingParentheses.indexOf(char)];

      if (stack.length === 0 || stack.pop() !== matchingOpeningParenthesis) {
        return false;
      }
    }
  }

  return stack.length === 0;
}