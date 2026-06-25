// 1. sumOfArray(arr)
// forces conversion to numbers, skips non-numeric text, yields 0 for empty arrays/bad types

export function sumOfArray(arr){
  if (!Array.isArray(arr)) return 0;
  return arr.reduce((sum, item) => {
    const num = Number(item);
    return isNaN(num) ? sum : sum + num;
  }, 0);
}

// // 2. reverseString(str)
// Explicitly casts numbers, booleans, and objects to text strings before reversing

export function reverseString(str) {
  if (str === null || str === undefined) return "";
  const safeStr = String(str);
  return safeStr.split("").reverse().join("");
}


// 3. isPalindrome(str)
// Normalizes capitalization, ignores spaces/punctuation, and treats numbers as text strings

export function isPalindrome(str){
  if (str === null || str === undefined) return false;
  const cleanStr = String(str).toLowerCase().replace(/[^a-z0-9]/g, "")
  if (cleanStr === "") return true;
  return cleanStr === cleanStr.split("").reverse().join(""); 
}

// 4. findMax(arr)
// Converts string-numbers, completely ignores actual text, correctly supports all-negative arrays

export function findMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;

  const validNumbers = arr
    .map(val => (typeof val === "string" && val.trim() === "" ? NaN : Number(val)))
    .filter(num => !isNaN(num));

  if (validNumbers.length === 0) return undefined;
  return Math.max(...validNumbers);
}

// 5. capitalizeWords(str)
// Trims bounding spaces, reduces consecutive spaces to a single break, and cast values to text safely

export function capitalizeWords(str) {
  if (str === null || str === undefined) return "";
  const safeStr = String(str).trim();
  if (safeStr === "") return "";
  return safeStr
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// 6. countVowels(str)
// Converts values to lowercase text, scans via global regex flag, falls back to 0 if matches are null.

export function countVowels(str) {
  if (str === null || str === undefined) return 0;
  const safeStr = String(str).toLowerCase();
  const matches = safeStr.match(/[aeiou]/g);
  return matches ? matches.length : 0;
}

// 7. purgeDuplicates(arr)
// Uses a hash-based Set lookup, preserves insertion order, returns a safe empty array on bad inputs

export function purgeDuplicates(arr) {
  if (!Array.isArray(arr)) return [];
  return [...new Set(arr)];
}