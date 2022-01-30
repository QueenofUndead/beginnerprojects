let number = 0;
function addnumber() {
    number+= 1;
    console.log(number)
    $("p").html(function () {
        return number
    })
}
function removenumber() {
    number -= 1;
    console.log(number)
    $("p").html(function () {
        return number
    })
}
$(document).ready(function () {
    $("#countup").click(function () { 
        addnumber()
    });
    $("#countdown").click(function() {
        removenumber()
    })
});