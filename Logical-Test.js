// # Palindrome Logical

function palindrome(arr) {
  const arrayPalindrome = [];
  arr.forEach((element) => {
    let splitString = element.split("");

    let reverseString = splitString.reverse();

    let joinString = reverseString.join("");

    if (element === joinString) {
      arrayPalindrome.push(element);
    }
  });

  return arrayPalindrome;
}

console.log(
  palindrome([
    "092289",
    "992299",
    "12291",
    "982289",
    "22022022",
    "2301",
    "2013",
    "1001",
    "756564",
    "1011",
    "766567",
    "756546",
    "2002",
    "91019",
    "765567",
  ])
);
