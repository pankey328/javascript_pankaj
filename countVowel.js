let string = "javascript";

let vowel = 0;

for (let i = 0; i < string.length; i++) {
  if (
    string[i] == "a" ||
    string[i] == "e" ||
    string[i] == "i" ||
    string[i] == "o" ||
    string[i] == "u"
  ) {
    vowel++;
    console.log(string[i]);
  }
}

console.log(vowel);
