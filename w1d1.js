/* case insensitive string compare */

const strA1 = "ABC";
const strB1 = "abc";
const expected1 = true;

const strA2 = "ABC";
const strB2 = "abd";
const expected2 = false;

const strA3 = "ABC";
const strB3 = "bc";
const expected3 = false;

/**
 * Determines whether or not the strings are equal, ignoring case.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} strA
 * @param {string} strB
 * @returns {boolean} If the strings are equal or not.
 */
function caseInsensitiveStringCompare(strA, strB) {
    // strA.toLowerCase()
    // strB.toLowerCase()
    // if (strA.toLowerCase == strB.toLowerCase) {
    //     console.log("true")
    // } else {
    //     console.log("false")
    // }
    return strA.toLowerCase() === strB.toLowerCase();
}
console.log(caseInsensitiveStringCompare(strA2, strB2));


/* 
Acronyms
Create a function that, given a string, returns the string’s acronym 
(first letter of each word capitalized). 
Do it with .split first if you need to, then try to do it without
*/

const str1 = " there's no free lunch - gotta pay yer way. ";
const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
const expected2 = "LFNYISN";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string to be turned into an acronym.
 * @returns {string} The given str converted into an acronym.
 */
function acronymize(str) {
    var expected = "";
    var string_split = str.split(" ");

    for (let i = 0; i < string_split.length; i++) {
        expected += string_split[i].charAt(0).toUpperCase();
    }
    return expected;
}
console.log(acronymize(str1))
console.log(acronymize(str2))