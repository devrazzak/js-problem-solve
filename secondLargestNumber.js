function getSecondLargest(arr) {
    let max = -Infinity,
        result = -Infinity;

    for (const value of arr) {
        const nr = Number(value);

        if (nr > max) {
            [result, max] = [max, nr]; // save previous max
        } else if (nr < max && nr > result) {
            result = nr; // new second biggest
        }
    }

    return result;
}

console.log(getSecondLargest([1, 2, 3, 4, 5, 15, 6, 6]));
