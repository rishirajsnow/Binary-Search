//Given a sorted array , find the first index of a given target.


let A=[2,2,5,5,5,5,6,7,10,10];
let target=5;

let l=0;
let r=A.length-1;


while(l<r){
    let mid=Math.floor(((l+r)/2))
    if(A[mid]===target && (mid===0 || A[mid-1]!==A[mid])){
        //The mid value is equal to the target and either its the first element in the array or the element before it is not same.
        console.log(mid);
    }
    if(A[mid]<target){
        l=mid+1;
    }
    else{
        r=mid-1;
    }
}
