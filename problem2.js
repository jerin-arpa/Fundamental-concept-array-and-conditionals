var myResult = 85;
var Tom = 66;
var Jane = 95;
var Peter = 56;
var John = 40;

function generateResult(result) {

    if (result >= 80) {
        console.log('A');
    }
    else if (result >= 60) {
        console.log('B');
    }
    else if (result >= 50) {
        console.log('C');
    }
    else if (result >= 40) {
        console.log('D');
    }
    else {
        console.log('F');
    }
}

generateResult(myResult);
generateResult(Tom);
generateResult(Jane);
generateResult(Peter);
generateResult(John);