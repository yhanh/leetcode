function removeDuplicates(nums) {
    let fast = 0;
    let slow = 0;

    for (fast; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }

    return slow + 1;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]