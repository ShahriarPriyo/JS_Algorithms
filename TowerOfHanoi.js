function TowerofHanoi(n,fromRod,toRod,usingRod){
    if(n===1){
        console.log(`Move from ${fromRod} to ${toRod}`)
        return
    }
    TowerofHanoi(n-1,fromRod,usingRod,toRod)
    console.log(`Move from ${fromRod} to ${toRod}`)
    TowerofHanoi(n-1,usingRod,toRod,fromRod)
}

TowerofHanoi(3,'A','C','B')

// move from 1st to last
// Only one plate at a time
// Bigger plate cannot move over to the smaller plate