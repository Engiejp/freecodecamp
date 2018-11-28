function reverseString(str) {
    var splitStr = str.split("");
    var reversedStr = splitStr.reverse();
    var joinStr = reversedStr.join("");
  
    return joinStr;
  }
  
  reverseString("hello");