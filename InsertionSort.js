function InsertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let numberToInsert=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>numberToInsert){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=numberToInsert
    }

}
//always fix the left side as sorted part
//then take other part and compare with the sorted part and move
//while sorting keep a variable and put the value in it to store the value 
//after comparing put the value in it 

const arr=[4,2,3,5,-2,-6,11,7]
InsertionSort(arr)
console.log(arr)