$(document).ready(function () {
    $(".menu-toggle").on("click", function () {
        $(".nav-blk").toggleClass("is-show");
        $(this).toggleClass("active");
    });
});