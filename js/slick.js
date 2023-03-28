$(document).ready(function () {
    $(".trend-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        arrow: true,
        dots: true,
        prevArrow: '<span class="prev-arrow"></span>',
        nextArrow: '<span class="next-arrow"></span>',

        responsive: [
            {
                breakpoint:1161,
                settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,          
                variableWidth: true,
                arrow: true,
                dots: true,
                }
            },
            {
                breakpoint:768,
                settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,          
                variableWidth: true,
                arrow: true,
                dots: true,
                }
            }

        ]

    })
})