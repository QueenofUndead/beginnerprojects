let number = 0;
// adds 1 to current count
function addnumber() {
    number+= 1;
    console.log(number)
    $("p").html(function () {
        return number
    })
}
// removes 1 from current count
function removenumber() {
    number -= 1;
    console.log(number)
    $("p").html(function () {
        return number
    })
}
// made buttons functional
$(document).ready(function () {
    $("#countup").click(function () { 
        addnumber()
    });
    $("#countdown").click(function() {
        removenumber()
    })
});