function removeDuplicates(nums) {
    let cursor = 0;
    let slow = 0;
    let fast = 1;

    if (nums.length === 1) {
        return nums.length;
    }

    for (fast; fast < nums.length; fast++, slow++) {
        if (slow === 0) {
            nums[cursor] = nums[0];
            cursor++;
        }

        if (nums[slow] !== nums[fast]) {
            nums[cursor] = nums[fast];
            cursor++;
        }
    }

    return cursor;
};