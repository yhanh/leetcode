function removeElement(nums, val) {
    // 最後陣列的長度
    let length = nums.length;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            length--;
        }
    }

    let pointer = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[pointer] = nums[j];
            pointer++;
        }
    }

    nums.length = length;

    return length;
};