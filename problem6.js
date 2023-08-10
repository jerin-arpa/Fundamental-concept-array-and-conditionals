var a = 4;
var b = 2;
var c = 4;
var d = 7;

if (a == b && b == c && c == d && a == c && b == d && a == d) {
    console.log('This is Square');
}
else if ((a == c && b == d) || (a == d && b == c) || (a == c && b == d)) {
    console.log('This is Rectangle');
}
else {
    console.log('This is Quadrilateral');
}