var isGraduated = true;
var salary = 25000;
var experience = 0;

// if (isGraduated == true && salary > 50000 && experience >= 1) {
//     console.log('find a job');
// }
// else {
//     console.log('finish your graduation');
// }

if (isGraduated == true || salary > 50000) {
    console.log('find a job');
}
else {
    console.log('finish your graduation');
}



if ((isGraduated == true && salary > 50000) || experience >= 1) {
    console.log('find a job');
}
else {
    console.log('finish your graduation');
}