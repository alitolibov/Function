let arr_numbers = [5,9,11,587,1,7,25,95,654]
let swapped;
function bubbleSort(arr) {
    swapped = false;
    let end = arr.length - 1;
    for(let i = 0; i < end; i++) {
        if(arr[i] > arr[i + 1]) {
            ali = true;
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    end--;
}
do{
    bubbleSort(arr_numbers)
} while (swapped)
console.log(arr_numbers);




let car = (all, broken) => {
    remont = broken / all * 100
    console.log(`Брокованые машины состовляют ${remont}%`);
}

car(150, 30)