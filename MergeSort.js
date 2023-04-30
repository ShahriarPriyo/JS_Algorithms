function MergeSort(arr){
    if(arr.length<2){
        return arr
    }
    const mid=Math.floor(arr.length/2)
    const leftArr=arr.slice(0,mid)
    const rightArr=arr.slice(mid)
    return merge(MergeSort(leftArr), MergeSort(rightArr))
}

function merge(leftArr,rightArr){
    const sortedArr=[]
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr[0])
        }else{
            sortedArr.push(rightArr[0])
        }
    }
    return [...sortedArr,...leftArr,...rightArr]
}

const arr=[20,8,-4,-6,3,-2]
console.log(MergeSort(arr))
