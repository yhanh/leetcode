/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i > -1 && j > -1) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // 處理 m = 0 的狀況(把 nums2 的值複製到 nums1)
    while (j > -1) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};