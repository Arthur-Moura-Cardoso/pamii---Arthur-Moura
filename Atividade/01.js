let num_list = [1,2,3,4,5,6,7,8,9]

for (let i = 0; i < num_list.length; i++) {
    if(num_list[i] % 2 == 0) {
        console.log(`o numero ${num_list[i]} é par`)
    }else {
        console.log(`o numero ${num_list[i]} é impar`)
    }
}