// $('.bxslider').slick({
//     rtl:true,
//     mode:'horizontal',
    
//     startSlide:2,
//     slidesToShow:3,
//     slidesToScroll:1,
//     contrrols: true,
//     autoplaySpeed:3000,

// })





// اسلایدر
$('.bxslider').slick({
    rtl: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
})


// انیمیشن صفحه اول


window.onload = function() {
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = "1"; // نمایان کردن تصویر
        }, index * 500); // هر تصویر با تأخیر متفاوت نمایان می‌شود
    });
};

// //  مواد مورد نیاز اسلایدر
// $('#ingredient-warpper').slick({
//     rtl: true,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     dots: true,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//             }
//         },
//         {
//             breakpoint: 576,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 dots: false
//             }
//         }
//     ]
// })
