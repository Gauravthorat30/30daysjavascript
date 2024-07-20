function main(fn , num){
    for (let i = 0 ; i < num ; i++){
        fn();
    }
}

const callback = () =>
    console.log("hiiiii")

main(callback , 3);
