const checkPalindrome = (str) => {
  const reverse = str
    .toLowerCase()
    .replace(/\W/g, "")
    .split("")
    .reverse()
    .join("");

  if (str.toLowerCase().replace(/\W/g, "") === reverse) {
    return true;
  }
  return false;
};

checkPalindrome("never odd or even");
