let lines = 5;
for (let i = 1 ; i <= lines ; i++){
    let pattern = "";
    for (let j = lines ; j >= i ; j--){
        pattern = pattern + "*"
    }
    console.log(pattern);
}