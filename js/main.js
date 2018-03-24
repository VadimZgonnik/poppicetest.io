// function range() {
//     var val = $('.range').val();
//     $('.range').css({ ' background': '-webkit-linear-gradient(left, #1db1ae 0%, #1db1ae +val+, #e4e4e4 +val+, #e4e4e4 100%)' })
// }

var range = document.getElementById('range');
var val = range.value;

range.oninput = function() {
    range.style.background = '-webkit-linear-gradient(left, #1db1ae 0%, #1db1ae +val, #e4e4e4 +val, #e4e4e4 100%)'
}