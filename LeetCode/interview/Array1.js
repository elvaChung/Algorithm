//1. Remove Duplicates from Sorted Array

const removeDuplicates = (nums) => {
    if(nums === 0 ) return 0;
    let i = 0;
    for(let j = 0; j < nums.length; j++){
        if(nums[i] !== nums[j]){
            i++;
            nums[i] = nums[j];
        }
    }return i+1;
};

console.log(removeDuplicates([1,1,2,2,2,3,4,4,]));

// 2. Best Time to Buy and Sell Stock II
