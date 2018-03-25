$(document).ready(() => {
    $('input[type="range"]').on('input', (e) => {
        const value = e.target.value;
        $(e.target).css('background', `-webkit-linear-gradient(left, #1db1ae 0%, #1db1ae ${value}%, #e4e4e4 ${value}%, #e4e4e4 100%)`)
    })
    $('.sl').slick();
})
$(document).ready(() => {

    $('.sl').slick();
})