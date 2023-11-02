export const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    draggable: true, // Enable drag scroll
    responsive: [
        {
            breakpoint: 768, // Adjust settings for smaller screens
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480, // Adjust settings for even smaller screens
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};