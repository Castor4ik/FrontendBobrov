let stud = function(name, age) {
    return {age: age,
    name: name}
}
var mas = []
let summ = function() {
    let a = document.getElementById("1").value
    let b = document.getElementById("2").value
    let s = new stud(a,b);
    console.log(s)
    document.getElementById("3").value = "age: " + s.age + " name: " + s.name
}
let res = function() {
    document.getElementById("2").value = mas
    b = "mas"
}
