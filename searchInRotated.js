let A=[6,7,8,10,12,1,2,3,4,5];
let B=5;
function search(A, B){

    let l=0;
    let r=A.length-1;
    let pivot=0;
    if(A[0]===B)return 0;
    if(A[A.length-1]===B)return A.length-1;
    while(l<=r) {
        let mid=Math.floor((l+r)/2);
        if(A[mid]>A[0]&&A[mid]>A[mid+1]){pivot=mid;if(A[pivot]===B){return pivot;}}
        if(A[mid]>A[0]){
            l=mid+1;
        }
        else{
            r=mid-1
        }

    }

    if(B<=A[pivot] && B>A[A.length-1]){
        let i=0;
        let j=pivot;

        while(i<=j){
            let mid=Math.floor((i+j)/2);
            if(A[mid]===B)return mid;
            if(A[mid]>B){j=mid-1}
            else{i=mid+1}
        }
    }
    else {
        let i=pivot+1;
        let j=A.length-1;

        while(i<=j){
            let mid=Math.floor((i+j)/2);
            if(A[mid]===B)return mid;
            if(A[mid]>B){j=mid-1}
            else{i=mid+1}
        }

    }

    return -1;

}
console.log(search(A,B));
