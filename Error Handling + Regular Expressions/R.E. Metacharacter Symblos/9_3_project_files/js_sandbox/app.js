// Literal Characters
let re;
re = /hello/i;


// Metacharacter Symbols
re = /^h/i;       //Must start with
re = /d$/i;       //Must end with
re = /^hello$/i;  //Must START and END with 'hello'
re = /h.llo/i;  //Matches any ONE Character
re = /h*llo/i;  //Matches any character 0 or more times
re = /gre?a?y/i;  //Optional Characters
re = /gre?a?y\?/i;  //Escape Characters


// Brackets [] - Character Sets
re = /gr[ae]y/i;    //Must be an 'a' or 'e'
re = /[GF]ray/;    //Must be an 'G' or 'F'
re = /[^GF]ray/;    //Match anything except a 'G' or 'F'
re = /^[GF]ray/;    //Must START with an uppercase 'G' or 'F'
re = /[A-Z]ray/;    //Match any uppercase letter
re = /[a-z]ray/;    //Match any lowercase letter
re = /[A-Za-z]ray/;    //Match any letter
re = /[0-9]0/;        //Match any number range


// Braces {} - Quantifiers
re = /Hel{2}o/i;    //Must occur exactly {m} amount of time (2 L's in this case)
re = /Hel{2,4}o/i;    //Must occur exactly {m} amount of time (2-4 L's in this case)
re = /Hel{2,}o/i;    //Must occur at least {m} times (at least 2 times in this case)


// Parenthesis () - Grouping
re = /([0-9]x){3}/    // Must be a number between 0-9 followed by 'x' 3 times (5x5x5x)


// Shorthand Character Classes
re = /\w/;    //Word character - alphanumeric or _
re = /\w+/;    // + = one or more
re = /\W/;    // Non-Word characters
re = /\d/;    // Match any digit
re = /\d+/;    // Match any digit 0 or more times
re = /\D/;    // Non-digit characters
re = /\s/;    // Match whitespace character
re = /\S/;    // Match non-whitespace character
re = /Hell\b/i;    // Word Boundary


// Assertions 
re = /x(?=y)/;    //Match x only if it is followed by y
re = /like(?=! soccer)/;    //Match 'like' only if NOT followed by 'soccer'



// String to match
const str = 'I really like baseball';
const result = re.exec(str);
console.log(result);

// Log Results
function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`)
  }
}

reTest(re, str);


