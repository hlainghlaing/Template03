$(document).ready(function () {
    $(".tabs-list a").click(function () {
        $(".tab-pannel").hide();
        $(".tabs-list a.active").removeClass("active");
        $(this).addClass("active");
        var panel = $(this).attr("href");
        $(panel).fadeIn(2000);

        return false;
    });
    $(".tabs-list li:first a").click();

    $(".new-tabs a").click(function () {
        $(".w-panel").hide();
        $(".new-tabs a.active").removeClass("active");
        $(this).addClass("active")

        var npanel = $(this).attr("href");
        $(npanel).fadeIn(1000);

        return false;
    })
    $(".new-tabs li:first a").click();
});