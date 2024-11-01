//Given a sorted array of distint elements.Find the index of a given target.
//Steps:
//1.Define the search space.
//mid=(l+r)/2
//2.check if mid is answer.
//3.Decide where to go-left/right
//  TC=O(logN)   SC=O(1)

console.log("Binary search")

let A=[1,2,3,4,5,6,7,8];
let target=5

const binarySearch=(A,target)=>{
//Define search space.
let left=0;
let right=A.length-1;

while(left<=right){
    let mid=Math.floor((left+right)/2);
    //console.log(mid)
    if(A[mid]===target)return mid;
    if(A[mid]<target)left=mid+1;
    else if(A[mid]>target){
        right=mid-1;
    }
}
return -1;
}

console.log(binarySearch(A,target));
