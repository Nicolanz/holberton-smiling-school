
// function removeElement(id) {
//     var elem = document.getElementById(id);
//     return elem.parentNode.removeChild(elem);
// }

$(window).on('resize', function() {
    if ($(window).width()< 1200) {
        document.body.style.backgroundColor = "white";
    }
    if ($(window).width()<960) {
        document.body.style.backgroundColor = "red";
    }
    if ($(window).width()<720) {
        document.body.style.backgroundColor = "red";
    }
    if ($(window).width()<540) {
        document.body.style.backgroundColor = "red";
    }
});