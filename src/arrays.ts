/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let arr: number[] = [];
    if (numbers.length === 0) return [];
    arr = [...numbers.slice(0, 1)];
    

    arr = numbers.length === 1 ? [...numbers.slice(0, 1), ...numbers.slice(0, 1)] :   [...numbers.slice(0, 1), ...numbers.slice(-1)];

    return arr;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const newArr = numbers.map((num: number): number => num*3);
    return newArr;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const newArr = numbers.map((str: string): number => (isNaN(parseInt(str))) ? 0 : parseInt(str));
    return newArr;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let arr: string[] = [];
    arr = amounts.map((str: string): string => (str.startsWith("$")) ? str.slice(1) : str);
    return arr.map((str: string): number => (isNaN(parseInt(str))) ? 0 : parseInt(str));
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages.map((str: string): string => (str.endsWith("!")) ? str.toUpperCase() : str).filter((str: string): boolean => (!str.endsWith("?")));
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    return words.filter((str: string): boolean => (str.length < 4)).length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) return true;
    return colors.every((str: string): boolean => (str === "red") || (str === "blue") || (str === "green"));
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) return "0=0";
    let str: string = "";
    let num: number = addends.reduce((total: number, num: number) => total+num, 0);
    str = str + num + "=";
    addends.map((num: number) => str+= num + "+");
    return str.slice(0, str.length - 1);
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let index: number = values.findIndex((num: number): boolean => num < 0);
    let sum: number = (index === -1) ? values.reduce((total: number, num: number) => total + num, 0) : values.slice(0, index).reduce((total, num) => total + num, 0);

    if (index === -1) return [...values, sum];

    return [...values.slice(0, index + 1), sum, ...values.slice(index + 1)];
}
