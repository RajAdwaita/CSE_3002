
function countVowels() {
    var str = document.getElementById("str").value;
    const count = str.match(/[aeiou]/gi).length;
    document.getElementById("ans").innerHTML = count;
}