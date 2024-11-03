//Given a increasing decreasing array with distinct elements.Find the maximum element.


let A=[1,3,5,2];
//Take special care while checking the first or last element. - corner case.


let l=0;
let r=A.length-1;

while(l<=r){
    let mid=Math.floor(((l+r)/2));
    if(mid===0||A[mid]>A[mid-1] && mid===A.length-1||A[mid]>A[mid+1]){
        console.log(A[mid]);
    }
    if(mid===0||A[mid]>A[mid-1]){l=mid+1}
    else{
        r=mid-1
    }
}