var searchInsert = function(nums, target) {
    const left = 0;
    const right = nums.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
        return left;
}  
const nums = [1, 3, 5, 6];
const target = 5;
console.log(searchInsert(nums, target))