function filterRange(arr, a, b) {
    let newArr = [];
    for (i = 0; i <= arr.length; i++) {
        if (a <= arr[i] && arr[i] <= b) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}