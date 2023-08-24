let sum = () => {
    let str = [86, 104, 64];
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += str[i];
    }
    console.log(sum);
};
sum();