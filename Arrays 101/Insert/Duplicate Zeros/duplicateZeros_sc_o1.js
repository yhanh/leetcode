/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr) {
    let left = arr.length - 1;
    let right = arr.length - 1;
    let cursor = 0;

    while (cursor < left) {
        if (arr[cursor] === 0) {
            left--;
        }

        cursor++;

        if (left === cursor && arr[left] === 0) {
            arr[right] = 0;
            right--;
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