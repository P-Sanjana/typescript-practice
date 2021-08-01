var a = { attendance: 80, assign: 70, project: 88, module: 65, total: 0 };
fun(a);
function fun(a) {
    a.total = ((a.attendance * 20) / 100) + ((a.assign * 30) / 100) + ((a.project * 20) / 100) + ((a.module * 30) / 100);
    console.log(a.total);
    fun1(a.total);
}
function fun1(total) {
    if (total >= 70)
        console.log("Excellent");
    else if (total < 70 && total >= 65)
        console.log("Very Good");
    else if (total < 65 && total >= 60)
        console.log("Good");
    else
        console.log("Average");
}
