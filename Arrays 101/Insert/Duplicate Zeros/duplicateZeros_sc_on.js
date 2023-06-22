/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr) {
    let left = arr.length - 1;
    let right = arr.length - 1;

    for (let cursor = 0; cursor < left; cursor++) {
        if (arr[cursor] === 0) {
            left--;
        }
    }

    for (left; left > -1; left--, right--) {
        arr[right] = arr[left];

        if (arr[left] === 0) {
            right--;
            arr[right] = 0;
        }
    }
};

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])