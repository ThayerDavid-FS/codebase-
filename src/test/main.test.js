

import {
    sumOfArray,
    reverseString,
    isPalindrome,
    findMax,
    capitalizeWords,
    countVowels,
    purgeDuplicates
} from '/src/main.js'


function runMasterTestSuite() {
    let passed = 0;
    let failed = 0;

    function assert(testName, actual, expected) {
        if (JSON.stringify(actual) === JSON.stringify(expected)) {
            console.log(`PASS: ${testName}`);
            passed++;
        } else {
            console.error(`FAIL: ${testName}\n   Expected: ${JSON.stringify(expected)}\n  Got: ${JSON.stringify(actual)} `);
            failed++
        }
    }

    console.log("=== Executing Complete Testing Matrix ===");

    // 1. sumOfArray Tests
    assert("sumOfArray - Basic math", sumOfArray([1,2,3]), 6);
    assert("sumOfArray - Array with numeric strings", sumOfArray([1, "10", 2]), 13);
    assert("sumOfArray - Ignores invalid text elements", sumOfArray([5, "broken", 5]), 10);
    assert("sumOfArrays - Bad data type fallback", sumOfArray(null), 0);

// 2. reverseString Tests
    assert("reverseString - Standard string", reverseString("abcd"), "dcba");
    assert("reverseString - Positive number conversion", reverseString(123), "321");
    assert("reverseString - Negative number preservation", reverseString(-5), "5-");
    assert("reverseString - Undefined type safely", reverseString(undefined), "");

    // 3. isPalindrome Tests
    assert("isPalindrome - Simple match", isPalindrome("radar"), true);
    assert("isPalindrome - Sentences with punctuation", isPalindrome("A man, a plan, a canal: Panama!"), true);
    assert("isPalindrome - Number tracking", isPalindrome(1221), true);
    assert("isPalindrome - False match check", isPalindrome("javascript"), false);

    // 4. findMax Tests
    assert("findMax - Mixed array values", findMax([3,100,45]), 100);
    assert("findMax - Deep negative bounds", findMax([-20, -5, -80]), -5);
    assert("findMax - Numeric string elements", findMax(["45", 12]), 45);
    assert("findMax - Pure text fallback array", findMax(["test", "data"]), undefined);

    // 5. capitalizeWords Tests
    assert("capitalizeWords - Base transformation", capitalizeWords("hello world"), "Hello World");
    assert("capitalizeWords - Wild whitespace spacing", capitalizeWords("clean up spaces "), "Clean Up Spaces");
    assert("capitalizeWords - Numeric elements", capitalizeWords(100), "100");

    // 6. countVowels Tests
    assert("countVowels - Standard counting", countVowels("Testing Code"), 4);
    assert("countVowels - Upper case isolation", countVowels("AEIOU"), 5);
    assert("countVowels - Pure numeric baseline", countVowels(-777), 0);

    // 7. purgeDuplicates Tests
    assert("purgeDuplicates - Array strings", purgeDuplicates(["x", "y", "x"]), ["x", "y"]);
    assert("purgeDuplicates - Array strings", purgeDuplicates([1, "1", 1, true]), [1, "1", true]);
    assert("purgeDuplicates - String input fallback", purgeDuplicates("not-an-array"), []);

    console.log(`\n=== Results: Passed ${passed} Test | Failed ${failed} Tests ===`);

}

runMasterTestSuite();