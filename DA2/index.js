function add() {
    // e.preventDefault();
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    const s = n1 + n2;
    document.getElementById("result").innerHTML = s;
    document.getElementById("result").style.color = "green";

}
function subtract() {
    // e.preventDefault();
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    const s = n1 - n2;
    document.getElementById("result").innerHTML = s;
    document.getElementById("result").style.color = "green";

}
function multiply() {
    // e.preventDefault();
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    const s = n1 * n2;
    document.getElementById("result").innerHTML = s;
    document.getElementById("result").style.color = "green";

}
function divide() {
    // e.preventDefault();
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    const s = parseInt(n1 / n2);
    document.getElementById("result").innerHTML = s;
    document.getElementById("result").style.color = "green";

}