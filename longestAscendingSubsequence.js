


function longestAscendingSubsequence(arr) {

    if (arr.length == 0) {

        return []
    }

    if (arr.length == 1) {

        return arr

    }


    let current = [arr[0]];
    let longest = current;
    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > arr[i - 1]) {
            current.push(arr[i]);
        } else {
            current = [arr[i]]
        }

        if (current.length > 1) {
            longest = current;
        }
    }

    return longest;
}

module.exports = longestAscendingSubsequence;