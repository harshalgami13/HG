$(document).ready(function () {
    $('.menubar').click(function () {
        $('.menulist').toggle()
    })
    function checkwidth() {
        var windowSize = $(window).width();
        if (windowSize >= 767) {
            $('.menulist').show()
        }
    }
    checkwidth();
    // Bind event listener
    $(window).resize(checkwidth);
})
$(document).ready(function () {
    $('.menulinks').click(function () {
        $('.menulist').hide()
    })
})