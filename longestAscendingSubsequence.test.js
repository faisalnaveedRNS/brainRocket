const longestAscendingSubsequence = require('./longestAscendingSubsequence');

describe('longestAscendingSubsequence', () => {
    test('should return an empty array for an empty input array', () => {
        expect(longestAscendingSubsequence([])).toEqual([]);
    });

    test('should return the same array for a single-element array', () => {
        expect(longestAscendingSubsequence([5])).toEqual([5]);
    });

    test('should return the longest ascending subsequence for a sorted ascending array', () => {
        expect(longestAscendingSubsequence([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    test('should return the longest ascending subsequence when input has a descending order', () => {
        expect(longestAscendingSubsequence([4, 3, 2, 1])).toEqual([4]);
    });

    test('should return the longest ascending subsequence for an array with mixed order', () => {
        expect(longestAscendingSubsequence([1, 2, 1, 3, 4])).toEqual([1, 3, 4]);
    });

    test('should handle arrays with repeated numbers', () => {
        expect(longestAscendingSubsequence([1, 2, 2, 3])).toEqual([2, 3]);
    });

    test('should handle arrays with negative numbers', () => {
        expect(longestAscendingSubsequence([-1, -2, 0, 1])).toEqual([-2, 0, 1]);
    });

    test('should handle arrays with a single longest subsequence at the start', () => {
        expect(longestAscendingSubsequence([1, 2, 3, 2, 1])).toEqual([1, 2, 3]);
    });

    test('should handle arrays with a single longest subsequence at the end', () => {
        expect(longestAscendingSubsequence([1, 1, 1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    test('should handle arrays with multiple same-length subsequences, returning the last one', () => {
        expect(longestAscendingSubsequence([1, 2, 1, 2, 3])).toEqual([1, 2, 3]);
    });
});
