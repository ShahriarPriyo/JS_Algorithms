function bubbleSort(array){
    for(let i=0; i<array.length-1;i++){
        for(let j=0; j<array.length-1-i;j++){
            if(array[j]>array[j+1]){
                // alternate way to swap
                [array[j],array[j+1]]=[array[j+1],array[j]];
                
                // const temp=array[j];
                // array[j]=array[j+1];
                // array[j+1]=temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,2,55,1,234,92]))