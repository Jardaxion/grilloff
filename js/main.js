$(document).ready(() => {
    let ourShop = new Swiper('.ourShops__buttons-wrp', {
        loop: false,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.ourShops__rightArrow',
            prevEl: '.ourShops__leftArrow',
        },
    })

    let ja = 0;
    let allImgs = [];
    $('.product__slider-wrp .product__slider-img').each(function() {
        allImgs[ja] = $(this).attr('src');

        ja++;
    })

    let productSlider = new Swiper('.product__slider-wrp', {
        loop: false,
        slidesPerView: 1,
        pagination: {
            el: '.product__slider-nav--slider',
            clickable: true,
            spaceBetween: 1700,
            renderBullet: function (index, className) {
                return '<div class="product__pagination-item ' + className + ' product__pagination-wrp"><img class="product__pagination-img" src="' + (allImgs[index]) + '" ></div>';
            },
        }
    })

    let navSlider = new Swiper('.product__slider-nav', {
        loop: false,
        direction: 'vertical',
        slidesPerView: 3,
    })

    let newsSlider = new Swiper('.products__content-wrp', {
        loop: false,
        slidesPerView: 4,
        navigation: {
            nextEl: '.products__rightArrow',
            prevEl: '.products__leftArrow',
        },
    })

    enterSelPage();

    $('.js-select-page').on('click', function(e){
        e.preventDefault();

        selectPage($(this).data('select-page'));
    })

    //Скрытие самописного placeholder
    $('.buy__input-input').each(function(){
        $($(this)).children('input').focus(function(){
            $(this).siblings('label').hide();
        })
        $($(this)).children('input').blur(function(){
            if($(this).val() === ''){
                $(this).siblings('label').show();
            }
        })
    })

    //Октрытие менюшки
    $('.js-select-city').on('click', (e) => {
        e.preventDefault();

        openCloseSelect();
    })
    //Выбор города
    $('.js-select-option').on('click', function(e){
        e.preventDefault();
        
        openCloseSelect();
    })
    //Закрытие этой выборки
    $(window).on('click', (e) => {
        if($('.js-select-city').hasClass('active') && !$('.js-select-city').hasClass('time')){
            if(e.target != document.querySelector('.js-select-box')){
                document.querySelectorAll('.js-select-box *').forEach((el) => {
                    if(e.target != el){
                        $('.js-select-city').removeClass('active');
                        $('.js-select').removeClass('active');
                    }
                })
            }
        }
    })
})

function enterSelPage(){
    $('.js-page[data-page="' + $('.js-select-page.active').data('select-page') + '"]').css('display', 'flex');
    $('.js-page[data-page="' + $('.js-select-page.active').data('select-page') + '"]').addClass('active');
}

function selectPage(page){
    $('.js-select-page.active').removeClass('active');
    $('.js-page.active').css('display', 'none');
    $('.js-page.active').removeClass('active');

    $('.js-select-page[data-select-page="' + page +'"]').addClass('active');
    $('.js-page[data-page="' + page + '"]').css('display', 'flex');
    $('.js-page[data-page="' + page + '"]').addClass('active');
}

//Открытие закрытие меню
function openCloseSelect(){
    $('.js-select-city').toggleClass('active');
    $('.js-select-city').toggleClass('time');
    $('.js-select').toggleClass('active');

    setTimeout(() => {
        $('.js-select-city').removeClass('time');
    }, 500);
}
