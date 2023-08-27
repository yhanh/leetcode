function moveZeroes(nums) {
    let readPointer = 0;
    let writePointer = 0;

    // 使用雙指針把非零的數字依照順序排列在陣列前方
    for (readPointer; readPointer < nums.length; readPointer++) {
        if (nums[readPointer] !== 0) {
            nums[writePointer] = nums[readPointer];
            writePointer++;
        }
    }

    // 接續使用 writePointer 累積的 index 值，將後方數字填充為 0
    for (writePointer; writePointer < nums.length; writePointer++) {
        nums[writePointer] = 0;
    }
};