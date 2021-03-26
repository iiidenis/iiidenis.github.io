$(document).ready(function() {
    $('.team_slider').slick({
        arrows: true,
        prevArrow: "<a class='slick-prev-pers'></a>",
        nextArrow: "<a class='slick-next-pers'></a>",
        infinite: true,
        speed: 350,
        // определяем скорость перелистывания
        slidesToShow: 4,
        //количество слайдов для показа
        slidesToScroll: 1,
        //сколько слайдов за раз перелистнется
        responsive: [{
            breakpoint: 700,
            //сообщает, при какой ширине экрана нужно включать настройки
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }]
    });
    $('.slick-client-about').slick({
        arrows: true,
        prevArrow: "<a class='slick-prev-pers'></a>",
        nextArrow: "<a class='slick-next-pers'></a>",
        infinite: true,
        speed: 350,
        // определяем скорость перелистывания
        slidesToShow: 2,
        //количество слайдов для показа
        slidesToScroll: 1,
        //сколько слайдов за раз перелистнется
        responsive: [{
            breakpoint: 700,
            //сообщает, при какой ширине экрана нужно включать настройки
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }]
    });
    // форма--------------------
    $(".modalbox").fancybox();
    $("#f_contact").submit(function() { return false; });
    $("#f_send").on("click", function() {

        // тут дальнейшие действия по обработке формы
        // закрываем окно, как правило делать это нужно после обработки данных
        // $("#f_contact").fadeOut("fast", function() {
        //     $(this).before("<p><strong>Наши менеджеры свяжутся с Вами в ближайшее время!</strong></p>");
        //     setTimeout("$.fancybox.close()", 3000);
        // });
    });




    // ------------------------------------

    // маска----------------------
    var telInp = $('input[type="tel"]');

    telInp.each(function() {
        $(this).mask("+7 (999) 999-99-99");
    });

    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    $('input[type="tel"]').click(function() {
        $(this).setCursorPosition(4); // set position number
    });

    // --------------------------------------

    // галерея сертификатов---------------------------------

    $("a.gallery").fancybox();

    // ------------------------
    $("#first-screen-form").submit(function () {
        if(($('#phone1').val()) !== '' && ($('#name1').val() !== '')){
            $(".overlayMD").css('visibility', 'visible');
            $(".before").css('display', 'block');
            setTimeout(function(){
            $('.overlayMD').css('visibility', 'hidden');
            $(".before").css('display', 'none');
            },3000) 
            $('#phone1,#name1,#phone2,#name2').prop( "disabled", true );
            $('.preview-block__btn').prop('disabled', true)
        }
           

        $.ajax({
            url: "get.php",
            type: "POST",
            data: {
                phone: $('#phone1').val(),
                title: $('#form1').val(),
                name: $('#name1').val()
            },
            success: function (response) {
                gtag('event', 'clickdopphone', { 'event_category': 'form', 'event_action': 'send', });
                yaCounter57873751.reachGoal('zayavka');                
            },
            error: function(jqXHR, textStatus, errorThrown) {
               console.log(textStatus, errorThrown);
            }
        });
        return false;
    });
    $("#f_contact").submit(function () {
        $.ajax({
            url: "get.php",
            type: "POST",
            data: {
                phone: $('#phone2').val(),
                title: $('#form2').val(),
                name: $('#name2').val()
            },
            success: function (response) {
                $('#phone1,#name1,#phone2,#name2').prop( "disabled", true );
                gtag('event', 'clickdopphone', { 'event_category': 'form', 'event_action': 'send', });
                
                yaCounter57873751.reachGoal('zayavka');
                $("#f_contact").fadeOut("fast", function() {
                    $(this).before("<p><strong>Наши менеджеры свяжутся с Вами в ближайшее время!</strong></p>");
                    setTimeout("$.fancybox.close()", 3000);
                });
            },
            error: function(jqXHR, textStatus, errorThrown) {
               console.log(textStatus, errorThrown);
            }
        });
        return false;
    });


});

$('#yak1').click (function() {

$('html, body').animate({scrollTop: $('#yak11').offset().top }, 1250);

});

$('#yak2').click (function() {
$('html, body').animate({scrollTop: $('#yak22').offset().top }, 1250);
});


$('#yak3').click (function() {
$('html, body').animate({scrollTop: $('#yak33').offset().top }, 1250);
});

$('#yak4').click (function() {
$('html, body').animate({scrollTop: $('#yak44').offset().top }, 1250);
});



