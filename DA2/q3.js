function submitFunction() {
    var val = prompt("Do you want to submit the data?");
    var cha = val.toLowerCase();
    // window.location = "./thank.html";
    console.log();
    if (val == "yes") {
        window.location = "./thank.html";
    }
}