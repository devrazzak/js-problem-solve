function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.

    // Print the area of the circle:
    const PI = Math.PI;
    let r = parseFloat(readLine());
    const area = PI * r * r;
    console.log(area);

    // Print the perimeter of the circle:
    const perimeter = 2 * PI * r;
    console.log(perimeter);
}

main();
