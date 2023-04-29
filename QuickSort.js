function QuickSort(arr){
    if(arr.length<2){
        return arr;
    }
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return[...QuickSort(left),pivot,...QuickSort(right)]
}

// have to choice a pivot it will be the last element of the array.
// >pivot will move to right and <pivot will move into left
// finally concate left,pivot and right

const arr=[-6,4,8,-2,20]
console.log(QuickSort(arr));