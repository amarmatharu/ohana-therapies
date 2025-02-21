import $ from './jquery3.5.1.min.js';
$(document).ready(function () {
    //Menu Js
    $('.menu_toggle_btn').click(function () {
        $('.header_menu').toggleClass('open_menu');
        $('html').toggleClass('cm-overflow');
    });
    //Mobile Menu Js
    $('.menu_item .menu_list').click(function () {
        if ($(window).width() <= 991) {
            $('html').toggleClass('cm-overflow');
            $('.header_menu').toggleClass('open_menu');
        }
    });
    // Menu Active
    $(".menu_item .menu_list").click(function () {
        $(".menu_list").removeClass("active");
        $(this).addClass("active");
    });
    $(document).ready(function () {
        let fileInput = document.getElementById("file-upload-input");
        let fileSelect = document.getElementsByClassName("file-upload-select")[0];
    
        if (fileInput && fileSelect) {
            fileSelect.onclick = function () {
                fileInput.click();
            };
            fileInput.onchange = function () {
                let filename = fileInput.files[0].name;
                let selectName = document.getElementsByClassName("file-select-name")[0];
                if (selectName) {
                    selectName.innerText = filename;
                }
            };
        } else {
            console.error("File upload elements not found.");
        }
    });
    // Smooth Scrolling to #id
    $('.scrollTo').click(function () {
        var height = $(window).height();
        var width = $(window).width();
        if (height > width) {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - 90
            }, 1500);
            return false;
        } else if (height < width) {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - 70
            }, 1500);
            return false;
        }
    });
    //Add Menu Active Class when scrolling to div
    // var sections = $('section')
    // , header = $('header')
    // , header_height = header.outerHeight();
    // $(window).on('scroll', function () {
    // var cur_pos = $(this).scrollTop();
    // sections.each(function() {
    //     var top = $(this).offset().top - header_height,
    //         bottom = top + $(this).outerHeight();
    //     if (cur_pos >= top && cur_pos <= bottom) {
    //     header.find('.menu_list').removeClass('active');
    //     sections.removeClass('active');
    //     $(this).addClass('active');
    //     header.find('.menu_list[href="#'+$(this).attr('id')+'"]').addClass('active');
    //     }
    // });
    // });
    // header.find('.menu_list').on('click', function () {
    // var $el = $(this)
    //     , id = $el.attr('href');
    
    // $('html, body').animate({
    //     scrollTop: $(id).offset().top - header_height
    // }, 500);
    
    // return false;
    // }); 
});
//Sticky Header
$(window).scroll(function () {
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});