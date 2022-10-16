
function square(num) {
    return num * num;
}
function cube(num) {
    return num * num * num;
}
function calc_disp() {
    // e.preventDefault();
    var ran = document.getElementById("range").value;
    var matches = ran.match(/\d+/g);
    console.log(matches);

    const sq = []
    const arr = []
    const roo = []

    let k = 0;
    var n1 = parseInt(matches[0]);
    var n2 = parseInt(matches[1]);

    if (n1 > n2 || n1 < 0 || n2 > 10) {
        document.getElementById("results").innerHTML = "<br>Invalid Range";
        document.getElementById("results").style.fontSize = "x-large";

    }

    else {
        var results = document.getElementById("results");
        var html = "<br><br><table border='5' cellpadding='10' cellspacing='5' ";
        html += "<tr><th>Number</th><th>Square</th><th>Cube</th></tr>";
        for (var i = n1; i <= n2; i++) {
            html += "<tr><td border='1'>" + i + "</td><td border='1'>" + square(i) + "</td><td border='1'>" + cube(i) + "</td></tr>";
        }
        html += "</table>";
        results.innerHTML = html;
    }

}

function clearField() {
    document.getElementById("results").innerHTML = "";
    document.getElementById("range").value = "";
}