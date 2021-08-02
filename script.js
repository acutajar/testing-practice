function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function reverseStr(str) {
  return str.split("").reverse().join("");
}

const calculator = {
  add: (n1, n2) => n1 + n2,
  subtract: (n1, n2) => n1 - n2,
  multiply: (n1, n2) => n1 * n2,
  divide: (n1, n2) => (n2 != 0 ? n1 / n2 : "dont divide by zero pls"),
};

function caesar(str, offset) {
  if (offset == 0) {
    return str;
  }
  return str.replace(/[a-zA-Z]/g, (char) => {
    if (char.charCodeAt(0) <= 90) {
      return String.fromCharCode(
        ((char.charCodeAt(0) - 65 + offset) % 26) + 65
      );
    } else {
      return String.fromCharCode(
        ((char.charCodeAt(0) - 97 + offset) % 26) + 97
      );
    }
  });
}

function analyzeArray(arr) {
  let myObj = {};
  myObj["average"] =
    arr.reduce((total, current) => total + current) / arr.length;
  myObj["min"] = arr.reduce((a, b) => Math.min(a, b));
  myObj["max"] = arr.reduce((a, b) => Math.max(a, b));
  myObj["length"] = arr.length;
  return myObj;
}

module.exports = {
  capitalize: capitalize,
  reverseStr: reverseStr,
  calculator: calculator,
  caesar: caesar,
  analyzeArray: analyzeArray,
};
