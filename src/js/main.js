(function($) {

    'use strict';

    var App = {

        /**
         * Init
         */
        init: function() {
            App.feature();
        },

        /**
         * Feature
         */
        feature: function() {
            // Slider
            $('#slider').nivoSlider();
            $('#slider-detail').nivoSlider({
                controlNav: true,
                controlNavThumbs: true
            });
            // Slider link
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                // autoWidth:true,
                autoplay: true,
                lazyLoad: true,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 5
                    }
                }
            });

            $('.range-slider').jRange({
                from: 0,
                to: 10,
                step: 1,
                scale: ["", "100k", "", "", "", "500k", "", "", "", "1m", ""],
                format: '%s',
                width: '100%',
                showLabels: true,
                isRange: true
            });
            $('.range-slider2, .range-slider3').jRange({
                from: 0,
                to: 5,
                step: 1,
                scale: ["1", "2", "3", "4", "5", "5+"],
                format: '%s',
                width: '100%',
                showLabels: true,
                isRange: true
            });
            $('.single-slider').jRange({
                from: -2.0,
                to: 2.0,
                step: 0.5,
                scale: [-2.0, -1.0, 0.0, 1.0, 2.0],
                format: '%s',
                width: '100%',
                showLabels: true,
                snap: true
            });
            $('#myModal').on('shown.bs.modal', function() {
                $('#myInput').focus();
            });
            $('#myModalColor').on('shown.bs.modal', function() {});
            $('#myGroupFav').on('shown.bs.modal', function() {});
            // $('#mySelectLocation').on('shown.bs.modal', function() {});
            // $('#mySelectFeature').on('shown.bs.modal', function() {});
            $('.btn-login').click(function() {
                $(this).find('a').html('LOGOUT');
            });
            $('select').niceSelect();
            $('.pgwSlideshow').pgwSlideshow({
                displayControls: 'false',
                transitionEffect: 'fading',
                displayList: 'true'
            });


            $('#content-box-text').colorpicker().on('changeColor', function(e) {
                $('body').val(e.color).css('color', e.color);
            });
            // green color
            var MainColorSite = $('.item-sub a:hover, .txt-title, .info-box-neighborhood, .title-sm, .btn-border, .header .navbar-nav > li.txt-phone a, .total-list .list-total,.header .navbar-nav > li.btn-login a, .head-detail .txt-product,.listing-grid .fr-list-info h4 a, .listing-grid .fr-list-bot, .nice-select, .search-box select, .listing-header .sortby select');
            var MainColorSiteBg = $('.fr-list, .btn-success, .frame-listing-block  .fr-list, .next-btn, .prev-btn, .theme-green .back-bar .pointer,  .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus');
            var MainColorSiteBorder = $('.btn-border, .header .navbar-nav > li.btn-login a, .ps-item.ps-selected,.theme-green .back-bar .pointer, .nice-select, .search-box select, .listing-header .sortby select');


            $('#top-bottom-site').colorpicker().on('changeColor', function(e) {
                $('.header, .copyright').val(e.color).css('background-color', e.color);
                $('.lb01').val(e.color).text(e.color);
            });
            var MasterFooterTile = $('.header .nav > li > a, .copyright');
            $('#masthead-footer-title').colorpicker().on('changeColor', function(e) {
                $(MasterFooterTile).val(e.color).css('color', e.color);
                $('.lb02').val(e.color).text(e.color);
            });
            var DropdownMenuBg = $('.navbar-nav > li > .dropdown-menu, .nice-select .list, #mySelectLocation, #mySelectFeature');
            $('#dropdown-menu-color').colorpicker().on('changeColor', function(e) {
                $(DropdownMenuBg).val(e.color).attr({
                    "style": "background-color:" + e.color + "!important"
                });
                $('.lb03').val(e.color).text(e.color);
            });
            $('#dropdown-menu-text').colorpicker().on('changeColor', function(e) {
                $('.mega-dropdown-menu > li > ul > li > a').val(e.color).css('color', e.color);
                $('.lb04').val(e.color).text(e.color);
            });
            $('#color-code-1').colorpicker().on('changeColor', function(e) {
                $(MainColorSiteBg).val(e.color).css('background-color', e.color);
                $(MainColorSite).val(e.color).css('color', e.color);
                $(MainColorSiteBorder).val(e.color).css({
                    'border-color': e.color
                });
                $('.lb05').val(e.color).text(e.color);
            });
            // blue color
            var SecondColorSite = $('a:hover, .search-box label, .filter-box, .item-sub a, .title-header, .txt-num-sub, .filter-box a.active, .filter-box a:hover, .listing-home .listing-block .menu-listing .title-sm, .title-detailm .title-header, .info-footer, .search-box label, .listing-box .total-list, .paging-of .next-btn,.paging-of .next-btn:hover, .listing-grid .fr-list-info h4, .list-sort a span');
            var SecondColorBg = $('.tilte-main,.title-more-detail,#mainNav .navbar-nav > li > .dropdown-menu');
            var SecondColorBorder = $('.filter-box, .border-lr, .title-detail, .nice-select.open .list, .paging-of .next-btn,.paging-of .next-btn:hover,  .list-sort a span');
            $('#color-code-2').colorpicker().on('changeColor', function(e) {
                $(SecondColorBg).val(e.color).css('background-color', e.color);
                $(SecondColorBorder).val(e.color).css('border-color', e.color);
                $(SecondColorSite).val(e.color).css('color', e.color);
                $('.lb06').val(e.color).text(e.color);
            });
            var LowerNavBarText = $('.filter-box a');
            $('#lower-nav-bar-text').colorpicker().on('changeColor', function(e) {
                $(LowerNavBarText).val(e.color).css('color', e.color);
                $('.lb06_01').val(e.color).text(e.color);
            });
            var LowerNavBarBg = $('.filter-box');
            $('#lower-nav-bar').colorpicker().on('changeColor', function(e) {
                $(LowerNavBarBg).val(e.color).css('background-color', e.color);
                $('.lb07').val(e.color).text(e.color);
            });
            var SearchButtonBg = $('.search-box .location .nice-select, .btn-border');
            $('#search-button-bg').colorpicker().on('changeColor', function(e) {
                $(SearchButtonBg).val(e.color).css('background-color', e.color);
                $('.lb08').val(e.color).text(e.color);
            });
            var SearchButtonBgText = $('.search-box .location .nice-select, .btn-border');
            $('#search-button-bg-text').colorpicker().on('changeColor', function(e) {
                $(SearchButtonBgText).val(e.color).css('color', e.color);
                $('.lb09').val(e.color).text(e.color);
            });
            $('#listing-bg').colorpicker().on('changeColor', function(e) {
                $('.listing-block').val(e.color).css('background-color', e.color);
                $('.lb10').val(e.color).text(e.color);
            });
            var ContentTextBoxColor = $('.frame-listing-block .fr-list, .txt-y,.listing-block .menu-listing .title-sm, .listing-block .menu-listing .item-sub a, .fr-list-info,.fr-list-info a, .fr-list-bot');
            $('#content-box-text').colorpicker().on('changeColor', function(e) {
                $(ContentTextBoxColor).val(e.color).css('color', e.color);
                $('.lb11').val(e.color).text(e.color);
            });

            $('#bg-web').colorpicker().on('changeColor', function(e) {
                $('body')[0].style.backgroundColor = e.color.toString('rgba');
                $('.lb12').val(e.color).text(e.color);
            });
            $('.color-config').on('click', function() {
                $('.lb01').text($('#top-bottom-site').val());
                $('.lb02').text($('#masthead-footer-title').val());
                $('.lb03').text($('#dropdown-menu-color').val());
                $('.lb04').text($('#dropdown-menu-text').val());
                $('.lb05').text($('#color-code-1').val());
                $('.lb06').text($('#color-code-2').val());
                $('.lb06_01').text($('#lower-nav-bar-text').val());
                $('.lb07').text($('#lower-nav-bar').val());
                $('.lb08').text($('#search-button-bg').val());
                $('.lb09').text($('#search-button-bg-text').val());
                $('.lb10').text($('#listing-bg').val());
                $('.lb11').text($('#content-box-text').val());
                $('.lb12').text($('#bg-web').val());
            });
            $('#mySelectLocation, #mySelectFeature').hide();

            $('.select-location').on('click', function(e) {
                e.preventDefault();
                $('#mySelectFeature').hide();
                $('#mySelectLocation').slideToggle();
            });
            $('.select-feature').on('click', function(e) {
                e.preventDefault();
                $('#mySelectLocation').hide();
                $('#mySelectFeature').slideToggle();
            });
            $('body').append('<a href="#" title="" class="goto_top">Go to Top</a>');
            $(window).scroll(function() {
                if ($(window).scrollTop() != 0) {
                    $('.goto_top').fadeIn();
                } else { $('.goto_top').fadeOut(); }
            });
            $('.goto_top').click(function() {
                $('html, body').animate({ scrollTop: 0 }, 500)
            });
            $('[data-toggle="tooltip"]').tooltip()
        }
    };

    $(function() {
        App.init();
    });

})(jQuery);
