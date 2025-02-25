let num_list = [-5,-4,-3,-2,-1,0,1,2,3,4,5]

for (let i = 0; i < num_list.length; i++) {
    if(num_list[i] > 0 ){
        console.log(`o numero ${num_list[i]} é positivo`)
    }else if (num_list[i] === 0){
        console.log(`o numero ${num_list[i]} é Zero`)
    }else {
        console.log(`o numero ${num_list[i]} é Negativo`)
    }
}