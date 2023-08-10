/**
 * @param {string} s
 * @return {number}
 */

// https://leetcode.com/problems/roman-to-integer/

var romanint = {'I': 1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000} 
s = "MCMXCIV"
// s = "III"
// s = "LVIII"
var romanToInt = function(s) {
    s = s.split('');
    sum = 0

    for (var i=0; i<s.length; i++){
    	if (s[i] == 'I' && s[i+1] == 'V'){
    		sum = sum + 4
    		i++
    	}
    	else if (s[i] == 'I' && s[i+1] == 'X'){
    		sum = sum + 9
    		i++
    	}
    	else if (s[i] == 'X' && s[i+1] == 'L'){
    		sum = sum + 40
    		i++
    	}
    	else if (s[i] == 'X' && s[i+1] == 'C'){
    		sum = sum + 90
    		i++
    	}
    	else if (s[i] == 'C' && s[i+1] == 'D'){
    		sum = sum + 400
    		i++
    	}
    	else if (s[i] == 'C' && s[i+1] == 'M'){
    		sum = sum + 900
    		i++
    	}
    	else{
        	sum = sum + romanint[s[i]];
        	console.log(sum, i)    		
    	}

    }
    console.log("return of sum", sum)
    return sum
}; 

result = romanToInt(s);
console.log(result);
