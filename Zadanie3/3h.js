function getElements(array) {
    let sortedArray = array.sort();
    let secondLowest = sortedArray[1];

    let arrayLength = sortedArray.length;
    let secondHighest = sortedArray[arrayLength-2];

    return 'Second lowest number: ' + secondLowest + ', second highest number: ' + secondHighest;
}

const array = [1, 5, 2, 9, 7, 8];

console.log(getElements(array));