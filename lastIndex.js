//Find the last index of the target =5?

let A=[1,2,3,4,5,5,6]

let l=0;
let r=A.length-1;
let target =6;

while(l<=r){
    let mid=Math.floor(((l+r)/2));
    if(A[mid]===target && (mid===A.length-1 || A[mid]!==A[mid+1])){
        console.log(mid);
    }
    if(A[mid]>target){r=mid-1;}
    else{//>=
        l=mid+1;
    }
}