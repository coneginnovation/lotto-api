jQuery(document).ready(function ($) {


    /*
        // REMOVE unnecessary extra CSS - usernav.css, sidebar.css, slide_banners.css, checkout.css, my_orders.css, updates_2013-12-25.css
        if ($(document).find($('link[href*="usernav.css"]'))) {
            $('link[href*="usernav.css"]').remove();
        }
        if ($(document).find($('link[href*="sidebar.css"]'))) {
            $('link[href*="sidebar.css"]').remove();
        }
        if ($(document).find($('link[href*="slide_banners.css"]'))) {
            $('link[href*="slide_banners.css"]').remove();
        }
        if ($(document).find($('link[href*="my_orders.css"]'))) {
            $('link[href*="my_orders.css"]').remove();
        }
        if ($(document).find($('link[href*="myprofile.css"]'))) {
            $('link[href*="myprofile.css"]').remove();
        }
        if ($(document).find($('link[href*="Checkout.css"]'))) {
            $('link[href*="Checkout.css"]').remove();
        }
        if ($(document).find($('link[href*="updates_2013-12-25.css"]'))) {
            $('link[href*="updates_2013-12-25.css"]').remove();
        }
        if ($(document).find($('link[href*="beta.css"]'))) {
            $('link[href*="beta.css"]').remove();
        }
    */

    // zoomStart.js product images
    jQuery(document).ready(function () {
        //initiate the plugin and pass the id of the div containing gallery images
        var cWidth = $(window).width();
        //if (cWidth > 767) {
            $('.product_photo > img').chilinZoom({ gallery: 'gallery_id_60297' });
        //}
        //pass the images to Placeholder Box
        $('.product_photo > img').bind('click', function (e) {
            var currWidth = $(window).width();
            //if ($("#form1").hasClass("mobile-screen"))

            if (currWidth < 768) {
                $('.product_photo > img').chilinZoom({ gallery: 'gallery_id_60297' });
                var ez = $('#ContentPlaceHolder1_imgProductPhoto').data('chilinZoom');
                var ezGalList = ez.getGalleryList();
                setTimeout(function () {
                    $.removeData($('img'), 'elevateZoom');
                    $('.zoomContainer').remove();
                }, 2000);
                $.fancybox(ezGalList);
            }
            return false;
        });
        $('.product_gallery > li > .product_thumb').click(function (e) {
            e.preventDefault();
            $('.product_gallery > li > .product_thumb').each(function () {
                $(this).removeClass('active');
            });
            $(this).addClass('active');
        });
        $('.product_details_tab > li > a').click(function (e) {
            e.preventDefault();
            hidding($('.product_details_tab > li > a'));
            displaying($(this).attr('href'), $(this));
        });
        //$('.bidding_help').click(function (e) {
        //$(document).on('click', '.bidding_help', function (e) {
        //    e.preventDefault();
        //    hidding($('.product_details_tab > li > a'));
        //    displaying($(this).attr('href'), $('.product_details_tab > li > a[href=' + $(this).attr('href') + ']'));
        //    $('html, body').animate({ scrollTop: $(".product_details").offset().top }, 500);
        //});
        //$('#show_history').click(function (e) {
        //    //e.preventDefault();
        //    $('#view_history').slideToggle(function () {
        //        if ($("#show_history").text() == "View Bidding History") $("#show_history").text("Hide Bidding History");
        //        else $("#show_history").text("View Bidding History");
        //    });
        //});
    });



    // User directed sign in
    if (window.location.href.indexOf("?signin=fbconnect") > -1) {
        $('#ContentPlaceHolder1_side_signin_btnFacebookLogin').trigger('click');
    }
    if (window.location.href.indexOf("?signin=default") > -1) {
        $('#login_box_Panel1').css({ 'width': '100%', 'height': '100%', 'position': 'fixed', 'top': '0', 'left': '0', 'background': 'rgba(0,0,0,0.7)', 'z-index': '1000' }).show();
        $('.HellowWorldPopup').css({ 'width': '600px', 'margin': '20% auto 0', 'z-index': '1001' }).show();
    }


    // REMOVE unnecessary extra jQuery
    $(function () {
        $('script[type="text/javascript"]').each(function () {
            if ($(this).html().indexOf('jQuery') !== -1 && $(this).html().indexOf('#show_user_profile') !== -1) {
                $(this).off().remove();
            }
        });
    });

    //Toggle User Menus
    $('#show_user_profile').off('click').click(function (e) {
        e.preventDefault();
        $('#user_profile').toggle();
        closeAllOtherTabs('users');
    });

    // Toggle languages list
    //    $('#lang_selection').click(function (e) {
    //        e.preventDefault();
    //        $('#languages').toggle();
    //        closeAllOtherTabs('languages');
    //    });


    /*add by balar // Toggle languages list */
    jQuery(document).ready(function ($) {

        var removeClass = true;
        $('#lang_button').click(function (e) {
            $("#lang_button").toggleClass("active_lang");
            $("#languages").toggleClass("active_lang");
            removeClass = false;
        });

        $('#languages').click(function (e) {
            removeClass = false;
        });
        $("html").click(function () {
            if (removeClass) {
                $("#lang_button").removeClass('active_lang');
                $("#languages").removeClass('active_lang');
            }
            removeClass = true;
        });
    });



    // Toggle cart
    /*
    $('#cart_button, .close_cart').click(function (e) {
        e.preventDefault();
        $('#cart > div.wrapper').css({'padding-bottom': '30px', 'border-bottom': '1px solid #ccc'});
        $('#cart').slideToggle(300).toggleClass('active');
        $('.close_cart').fadeToggle(300);
        closeAllOtherTabs('cart');
    });
    */

    // Toggle the Video
    $('a.vdo-toggle').each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            $(this).parent().find($('div.vdo-lightbox')).toggle();
        });
    });
    $('div.vdo-lightbox').each(function () {
        $(this).click(function () {
            $(this).toggle();
        });
    });

    // Toggle Product Details
    $('.product_details_tab > li > a').click(function (e) {
        e.preventDefault();
        hidding($('.product_details_tab > li > a'));
        displaying($(this).attr('href'), $(this));
    });

    // Toggle Bidding Help (the ? next to the bidding button)
    //$('.bidding_help').click(function (e) {
    $(document).on('click', '.bidding_help', function (e) {
        e.preventDefault();
        hidding($('.product_details_tab > li > a'));
        displaying($(this).attr('href'), $('.product_details_tab > li > a[href=' + $(this).attr('href') + ']'));
        $('html, body').animate({ scrollTop: $(".product_details").offset().top }, 500);
    });

    // Toggle Bidding History
    $('#show_history').click(function (e) {
        e.preventDefault();
        $('#view_history').slideToggle(function () {
            if ($("#show_history").text() == "View Bidding History") $("#show_history").text("Hide Bidding History");
            else $("#show_history").text("View Bidding History");
        });
    });

    // Toggle Bidding Message
    //$('#ContentPlaceHolder1_btnBid').click(function () {
    //    $('.bidding_msg').css({ height: 'auto' }).toggle();
    //});

    // Apply new classes to my auctions & my orders links to be able to easily referring through CSS
    // JASPAR $(function () {
    // Jaspar $('#users a[href="/myauctions.aspx"]').addClass('my_auction_link');
    // Jaspar $('#user_profile a[href="/MyOrders.aspx"]').addClass('my_order_link'); 
    // Jasapr Correct wording for Thai language
    // Jaspar $('#repLanguages_ctl01_lnkLang').text('Ã Â¸ Ã Â¸Â²Ã Â¸Â©Ã Â¸Â²Ã Â¹â€Ã Â¸â€"Ã Â¸Â¢');
    // Override the Category CSS
    // JASPAR
    /*$('div.compact_view.roundedCorners').each(function () {
            $(this).find('hr').remove();
            $(this).find($('div[style="padding:6px;"]')).remove();
            $(this).removeClass('roundedCorners').removeAttr('style');
        });
        //console.log('1. My Auction Link - Get Through');
        return false;
    });
*/ /*
        // Correct users selected language
      //  $(function () {
        //    if ($('a#lang_button').hasClass('lang_button_en')) {
               // JASPAR $('#header #users .user_nav .lang_button_en span').text('Ã Â¹â‚¬Ã Â¸â€ºÃ Â¸Â¥Ã Â¸ÂµÃ Â¹Ë†Ã Â¸Â¢Ã Â¸â"¢Ã Â¸ Ã Â¸Â²Ã Â¸Â©Ã Â¸Â²');
               // $('#header #users .user_nav #languages').removeClass().addClass('en_current');
               // Jaspar $('.my_order_link').text('My Orders');
               // Jaspar  $('.log_out').text('Sign Out');
         //       if ($('#feed_list').find('.right_col')) {
           //         $('#feed_list .right_col').find($('div:contains("New Items")')).css('font-family', '"Source Sans Pro"');
              //  }
                $('.compact_view .timeout span').each(function () {
                    $(this).text($(this).text().replace('Ends in ', ''));
                    $(this).prepend('<span class="txt-ends_in">Ends In</span>')
                });
            } else if ($('a#lang_button').hasClass('lang_button_th')) {
                // Jaspar$('#header #users .user_nav .lang_button_th span').text('Set Language');
                // $('#header #users .user_nav #languages').removeClass().addClass('th_current');'
                console.log("hasClass lang_button_th");
               // JASPAR $('.my_order_link').text('Ã Â¸Â£Ã Â¸Â²Ã Â¸Â¢Ã Â¸ÂÃ Â¸Â²Ã Â¸Â£Ã Â¸ÂªÃ Â¸Â±Ã Â¹Ë†Ã Â¸â€¡Ã Â¸â€¹Ã Â¸Â·Ã Â¹â€°Ã Â¸Â­');
               // Jaspar $('.log_out').text('Ã Â¸Â­Ã Â¸Â­Ã Â¸ÂÃ Â¸Ë†Ã Â¸Â²Ã Â¸ÂÃ Â¸Â£Ã Â¸Â°Ã Â¸Å¡Ã Â¸Å¡');
               // Jaspar $('.product_info .info_field').each(function () {
               // Jaspar    if ($(this).text() == 'Select Size') {
               // Jaspar        $(this).text('Ã Â¹â‚¬Ã Â¸Â¥Ã Â¸Â·Ã Â¸Â­Ã Â¸ÂÃ Â¸â€šÃ Â¸â"¢Ã Â¸Â²Ã Â¸â€');
               // Hasapr    } else if ($(this).text() == 'Current Winner') {
               // Jaspar         $(this).text('Ã Â¸Å"Ã Â¸Â¹Ã Â¹â€°Ã Â¸Å Ã Â¸â"¢Ã Â¸Â°Ã Â¸ÂÃ Â¸Â²Ã Â¸Â£Ã Â¸â€ºÃ Â¸Â£Ã Â¸Â°Ã Â¸Â¡Ã Â¸Â¹Ã Â¸Â¥ Ã Â¸â€œ Ã Â¸â€ºÃ Â¸Â±Ã Â¸Ë†Ã Â¸Ë†Ã Â¸Â¸Ã Â¸Å¡Ã Â¸Â±Ã Â¸â"¢');
                    }
                });
    
                $('.current_bid').each(function () {
                    $(this).text($(this).text().replace('THB', 'Ã Â¸Å¡Ã Â¸Â²Ã Â¸â€"'));
                });
                $('.compact_view .timeout span').each(function () {
                    $(this).text($(this).text().replace('Ã Â¸ÂªÃ Â¸Â´Ã Â¹â€°Ã Â¸â"¢Ã Â¸ÂªÃ Â¸Â¸Ã Â¸â€Ã Â¸ÂÃ Â¸Â²Ã Â¸Â£Ã Â¸â€ºÃ Â¸Â£Ã Â¸Â°Ã Â¸Â¡Ã Â¸Â¹Ã Â¸Â¥Ã Â¹Æ'Ã Â¸â"¢ ', ''));
                    $(this).prepend('<span class="txt-ends_in">Ã Â¸ÂªÃ Â¸Â´Ã Â¹â€°Ã Â¸â"¢Ã Â¸ÂªÃ Â¸Â¸Ã Â¸â€Ã Â¸ÂÃ Â¸Â²Ã Â¸Â£Ã Â¸â€ºÃ Â¸Â£Ã Â¸Â°Ã Â¸Â¡Ã Â¸Â¹Ã Â¸Â¥Ã Â¹Æ'Ã Â¸â"¢</span>');
                });
                $('.compact_view .bidding_button a').each(function () {
                    $(this).text($(this).text().replace(/^\s+|\s+$/gi, ""));
                });
                
                $('#ctl00_ContentPlaceHolder1_lbBidCurrency').text('Ã Â¸Å¡Ã Â¸Â²Ã Â¸â€"');
                if ($('#feed_list').find('.right_col')) {
                    $('#feed_list .right_col').find($('div:contains("Ã Â¸Â£Ã Â¸Â²Ã Â¸Â¢Ã Â¸ÂÃ Â¸Â²Ã Â¸Â£Ã Â¹Æ'Ã Â¸Â«Ã Â¸Â¡Ã Â¹Ë†")')).css('font-family', '"Quark"');
                };
            //console.log('2. Languages Translation - Get Through');
            return false;
        });
    
    */

    // Duplicate the top menu to the right column of the page
    if (document.getElementById('user_profile')) {
        if ($('#user_profile li a:first-child').attr('href') != "/MyProfile.aspx") {
            if ($('#users > .user_nav > li > a#lang_button').hasClass('lang_button_en')) {


                $('<li><a href="/MyProfile.aspx">My Profile</a></li>').prependTo($('#header #user_profile'));
            } else {
                $('<li><a href="/MyProfile.aspx">Ã Â¸â€šÃ Â¹â€°Ã Â¸Â­Ã Â¸Â¡Ã Â¸Â¹Ã Â¸Â¥Ã Â¸ÂªÃ Â¹Ë†Ã Â¸Â§Ã Â¸â"¢Ã Â¸â€¢Ã Â¸Â±Ã Â¸Â§</a></li>').prependTo($('#header #user_profile'));
            }
        }
    }
    /*
    $(function () {
        if ($('#auction_feed').find('.right_col')) {
            $('#header #users').clone().prependTo('#auction_feed .right_col');
            if (document.getElementById('ctl00_liUserProfile')) {
                $('#auction_feed .right_col #users .user_nav #ctl00_liUserProfile').prependTo('#auction_feed .right_col #users .user_nav');
                $('#auction_feed .right_col #users .user_nav #ctl00_liUserProfile a').attr('href', '/MyProfile.aspx');
                $('#header #user_profile li').each(function () {
                    $(this).clone().appendTo('#auction_feed .right_col #users .user_nav');
                });
            } else {
                $('#auction_feed .right_col #users #ctl00_liUserSignIn').prependTo('#auction_feed .right_col #users .user_nav');
            }
            $('#auction_feed .right_col #users #languages').parent().remove();
            if ($('#users > .user_nav > li > a#ctl00_lang_button').hasClass('lang_button_en')) {
                $('#header #users #languages #ctl00_repLanguages_ctl01_lnkLang').parent().clone().appendTo('#auction_feed .right_col #users .user_nav');
                $('#auction_feed .right_col #users .user_nav #ctl00_repLanguages_ctl01_lnkLang').text('Ã Â¹â‚¬Ã Â¸â€ºÃ Â¸Â¥Ã Â¸ÂµÃ Â¹Ë†Ã Â¸Â¢Ã Â¸â"¢Ã Â¸ Ã Â¸Â²Ã Â¸Â©Ã Â¸Â²');
            } else {
                $('#header #users #languages #ctl00_repLanguages_ctl00_lnkLang').parent().clone().appendTo('#auction_feed .right_col #users .user_nav');
                $('#auction_feed .right_col #users .user_nav #ctl00_repLanguages_ctl00_lnkLang').text('Set Language');
            }
            if (document.getElementById('ctl00_liUserProfile')) {
                $('#auction_feed .right_col #users .user_nav .log_out').parent().appendTo('#auction_feed .right_col #users .user_nav');
                $('#auction_feed .right_col #users .user_nav .my_auction_link').attr('href', 'MyAuctions.aspx');
                $('#auction_feed .right_col #users .user_nav #cart_button').attr('href', '/MyCart.aspx');
            } else {
                $('#auction_feed .right_col #users .user_nav .my_auction_link, #auction_feed .right_col #users .user_nav #cart_button').attr('href', $('#auction_feed .right_col #users .user_nav #ctl00_liUserSignIn a').attr('href'));
            }
            $('#auction_feed .right_col #users').removeAttr('id').addClass('user_aside');
            if ($('#users > .user_nav > li > a#ctl00_lang_button').hasClass('lang_button_en')) {
                $('<li><a href="/MyProfile.aspx">My Profile</a></li>').prependTo($('#header #user_profile'));
            } else {
                $('<li><a href="/MyProfile.aspx">Ã Â¸â€šÃ Â¹â€°Ã Â¸Â­Ã Â¸Â¡Ã Â¸Â¹Ã Â¸Â¥Ã Â¸ÂªÃ Â¹Ë†Ã Â¸Â§Ã Â¸â"¢Ã Â¸â€¢Ã Â¸Â±Ã Â¸Â§</a></li>').prependTo($('#header #user_profile'));
            }
        }
        if ($('.right_col #ctl00_liUserSignIn').find('a#signin_button') && $('.right_col #ctl00_liUserSignIn a#signin_button').text() == '') {
            $('.right_col #ctl00_SignIn a#signin_button').remove();
        }
        if ($('#header #ctl00_liUserSignIn').find('a#signin_button') && $('#header #ctl00_liUserSignIn a#signin_button').text() == '') {
            $('#header #ctl00_liUserSignIn a#signin_button').remove();
        }
        //console.log('3. Menu Right Column - Get Through');
        return false;
    });
    */

    // Create 3 additional details for 1) Return Product, 2) Shipping, and 3) Payment and add to the Product Details Page
    // Add event controller, hide/show, to each items
    $('.service_condition a').each(function () {
        $(this).click(function (e) {
            var targetMessageID = $(this).attr('href');
            e.preventDefault();
            $('.service_condition p').each(function () {
                if ($(this).hasClass('active') && ("#" + $(this).attr('id')) != targetMessageID) {
                    $(this).removeClass('active').hide();
                }
            });
            $($(this).attr('href')).toggleClass('active').toggle();
        });
    });
    /*
    $(function () {
        if (document.getElementById('ctl00_ContentPlaceHolder1_txtBid')) {

            var lnk_return_condition = '',
                lnk_shipping_condition = '',
                lnk_payment_condition = '',
                txt_return_condition = $('#ctl00_ContentPlaceHolder1_lb342').attr('txt_return_condition'),
                txt_shipping_condition = $('#ctl00_ContentPlaceHolder1_lb343').attr('txt_shipping_condition'),
                txt_payment_condition = $('#ctl00_ContentPlaceHolder1_lb344').attr('txt_payment_condition'),
                html = '';

            // Text to be displayed according to the Selected Language
            if ($('#users > .user_nav > li > a#ctl00_lang_button').hasClass('lang_button_en')) {
                lnk_return_condition = 'Return Product';
                lnk_shipping_condition = 'Shipping';
                lnk_payment_condition = 'Payment';
            } else {
                lnk_return_condition = 'Ã Â¸ÂÃ Â¸Â²Ã Â¸Â£Ã Â¸â€Ã Â¸Â·Ã Â¸â"¢Ã Â¸ÂªÃ Â¸Â´Ã Â¸â"¢Ã Â¸â€Ã Â¹â€°Ã Â¸Â²';
                lnk_shipping_condition = 'Ã Â¸ÂÃ Â¸Â²Ã Â¸Â£Ã Â¸Ë†Ã Â¸Â±Ã Â¸â€Ã Â¸ÂªÃ Â¹Ë†Ã Â¸â€¡Ã Â¸ÂªÃ Â¸Â´Ã Â¸â"¢Ã Â¸â€Ã Â¹â€°Ã Â¸Â²';
                lnk_payment_condition = 'Ã Â¸ÂÃ Â¸Â²Ã Â¸Â£Ã Â¸Å Ã Â¸Â³Ã Â¸Â£Ã Â¸Â°Ã Â¹â‚¬Ã Â¸â€¡Ã Â¸Â´Ã Â¸â"¢';
            }

            // Compose the HTML to be injected to the page
            html += '<div class="service_condition">' +
                '<div class="return_condition"><a href="#view_return_condition"><label>' + lnk_return_condition + '</label></a></div>' +
                '<div class="shipping_condition"><a href="#view_shipping_condition"><label>' + lnk_shipping_condition + '</label></a></div>' +
                '<div class="payment_condition"><a href="#view_payment_condition"><label>' + lnk_payment_condition + '</label></a></div>' +
                '<p id="view_return_condition">' + txt_return_condition + '</p>' +
                '<p id="view_shipping_condition">' + txt_shipping_condition + '</p>' +
                '<p id="view_payment_condition">' + txt_payment_condition + '</p>' +
                '</div>';
            $(html).insertAfter('.single_product .right');

            // Add event controller, hide/show, to each items
            $('.service_condition a').each(function () {
                $(this).click(function (e) {
                    var targetMessageID = $(this).attr('href');
                    e.preventDefault();
                    $('.service_condition p').each(function () {
                        if ($(this).hasClass('active') && ("#" + $(this).attr('id')) != targetMessageID) {
                            $(this).removeClass('active').hide();
                        }
                    });
                    $($(this).attr('href')).toggleClass('active').toggle();
                });
            });

            // Fix the row spacing - REMOVE in-line style applying to .timeout
            if ($('.info_data.timeout').attr('style').indexOf('height:20px;') !== -1) {
                $('.info_data.timeout').removeAttr('style');
            }

        }
        //console.log('4. Auction Information - Get Through');
        return false;
    });
    */

    // Fix the row spacing - REMOVE in-line style applying to .lang_button_en/.lang_button_th -> span#ctl00_lit77
    $(function () {
        if ($(document).find('#lit77') && (typeof $('#lit77').attr('style') !== 'undefined' && $('#lit77').attr('style') !== false)) {
            if ($('#lit77').attr('style').indexOf('padding') !== -1) {
                $('#lit77').removeAttr('style');
            }
        }
        //console.log('5. Language Button Spacing - Get Through');
        return false;
    });

    // Only display the How-To VDO on the frontpage and category view
    $(function () {
        if ($(location).attr('pathname') != "/" && $(location).attr('pathname').indexOf('Default') == -1 && $(location).attr('pathname').indexOf('Category') == -1) {
            $('.right_col .how-to-bid').remove();
            if ($(document).find('.right_col .side_signin')) {
                $('.right_col .side_signin').css({ marginBottom: '15px' });
            } else {
                $('.right_col #users').css({ marginBottom: '15px' });
            }
        } else if ($('#feed_list .right_col').find('.vdo-placeholder')) {
            // Get video from Vimeo instead
            $('#feed_list .right_col .vdo-placeholder iframe').replaceWith('<iframe src="//player.vimeo.com/video/88956522" width="620" height="387" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
        }
        //console.log('6. Update VDO Source - Get Through');
        return false;
    });

    // Fix the bidding buttons placement following an update on displaying the Ending Clocks
    $(function () {
        if ($(document).find($('.product_info'))) {
            $('.product_info').each(function () {
                if ($('.left .timeout', this).find('img').hasClass('ending_clock')) {
                    $('.info_data.bidding_button', this).addClass('removable').clone().appendTo($('.right', this));
                    $('.right .info_data.bidding_button.removable', this).removeClass('removable');
                    $('.info_data.bidding_button.removable', this).remove();
                }
            });
        }
        //console.log('7. Ending Clock - Get Through');
        return false;
    });

    // Display link to the job page on the frontpage
    /*
    $(function () {
        var jobModHTML = '';
        if ($('#users > .user_nav > li > a#ctl00_lang_button').hasClass('lang_button_en')) {
            jobModHTML += '<a class="open-positions" href="http://chilindo.com/a/jobs/en.html">';
            jobModHTML += '<span>We are Hiring</span>';
        } else {
            jobModHTML += '<a class="open-positions" href="http://chilindo.com/a/jobs/th.html">';
            jobModHTML += '<span>Ã Â¹â‚¬Ã Â¸Â£Ã Â¸Â²Ã Â¸ÂÃ Â¸Â³Ã Â¸Â¥Ã Â¸Â±Ã Â¸â€¡Ã Â¹â‚¬Ã Â¸â€ºÃ Â¸Â´Ã Â¸â€Ã Â¸Â£Ã Â¸Â±Ã Â¸Å¡Ã Â¸Å"Ã Â¸Â¹Ã Â¹â€°Ã Â¸Â£Ã Â¹Ë†Ã Â¸Â§Ã Â¸Â¡Ã Â¸â€¡Ã Â¸Â²Ã Â¸â"¢</span>';
        }
        jobModHTML += '</a>';
        if ($(document).find($('#feed_list .right_col .how-to-bid'))) {
            $(jobModHTML).insertAfter($('#feed_list .right_col .how-to-bid'));
        }
        //console.log('8. Link to Jobs - Get Through');
        return false;
    });
    */

    // Enable Slide images
    /*
    $(function () {
        if ($(document).find('.slides')) {
            $('.slides').slidesjs({
                width: 940,
                height: 300, // update with new optimized images supplied
                play: {
                    active: false,
                    interval: 4000,
                    auto: true,
                    pauseOnHover: true,
                    restartDelay: 1000
                },
                callback: {
                    complete: function () {
                        var pluginInstance = $('.slides').data('plugin_slidesjs');
                        setTimeout(function () {
                            pluginInstance.play(true);
                        }, 4000);
                    }
                }
            });
        }
        //console.log('9. Enable Slides - Get Through');
        //return false;
    });
    */

    // Set text color to red if the auction has less than 15 minutes left
    $(function () {
        if ($(document).find('#feed_list .single_product')) {
            var minleft = $('#feed_list .single_product .timeout').text().split(':');
            if (minleft[1] < 15) {
                $('#feed_list .single_product .timeout').css({ color: '#c35' });
            }
        }
        return false;
    });

    // Inject an option-placeholder to <select> on profile page for a better styling capability
    $(function () {
        if ($(document).find('#my_profile .edit_profile')) {
            $('#my_profile .edit_profile select').each(function () {
                //$(this).wrap('<div class="option_placeholder"></div>');
                if ($(this).attr('disabled') == 'disabled') {
                    $(this).parent().addClass('disable_field');
                }
            });
            //$('#my_profile .user_profile p').each(function () {
            //    if ($(this).attr('id') == 'plitUpdateInfo') { //$(this).css('padding-left') == '200px'
            //        $(this).css({ backgroundColor: '#396' }).insertBefore('#my_profile .current_profile h2').addClass('profile-updated').delay(3000).fadeOut(500);
            //    }
            //});
        }
        if ($(document).find('#ContentPlaceHolder1_billing_address')) {
            $('#ContentPlaceHolder1_billing_address .option_placeholder select').each(function () {
                if ($(this).attr('disabled') == 'disabled') {
                    $(this).parent().addClass('disable_field');
                }
            });
        }
        return false;
    });

    // Inject 'Empty Cart Info' to the cart and Remove empty <li>
    $(function () {
        //if ($(document).find('ul.cart_list')) {
        //    $('ul.cart_list').each(function () {
        //        if ($('li', this).size() < 2) {
        //            $(this).parent().find('.checkout_start').hide();
        //            if ($('body').hasClass('en_lang')) {
        //                $('li:first-child', this).html('<span class="cart_empty">Your cart is currently empty</span>');
        //            } else {
        //                $('li:first-child', this).html('<span class="cart_empty">Ã Â¹â€Ã Â¸Â¡Ã Â¹Ë†Ã Â¸Â¡Ã Â¸ÂµÃ Â¸Â£Ã Â¸Â²Ã Â¸Â¢Ã Â¸ÂÃ Â¸Â²Ã Â¸Â£Ã Â¸ÂªÃ Â¸Â´Ã Â¸â"¢Ã Â¸â€Ã Â¹â€°Ã Â¸Â²Ã Â¸Â£Ã Â¸Â­Ã Â¸ÂÃ Â¸Â²Ã Â¸Â£Ã Â¸Å Ã Â¸Â³Ã Â¸Â£Ã Â¸Â° Ã Â¸â€œ Ã Â¸â€šÃ Â¸â€œÃ Â¸Â°Ã Â¸â"¢Ã Â¸ÂµÃ Â¹â€°</span>');
        //            }
        //        } else {
        //            $('ul.cart_list li').each(function () {
        //                if (!$(this).hasClass('cart_rows') && !$(this).hasClass('cart_heading')) {
        //                    $(this).remove();
        //                }
        //            });
        //        }
        //    });
        //}
        return false;
    });

    // Remove duplicate #extra_info
    $(function () {
        if ($(document).find('#auction_feed > #extra_info')) {
            $('#auction_feed > #extra_info').remove();
        }
        return false;
    });

    // Remove empty <p> in log in form
    $(function () {
        if ($(document).find('#ContentPlaceHolder1_dvUserLogin')) {
            $('#ContentPlaceHolder1_dvUserLogin p').each(function () {
                if ($('label', this).text() == '') {
                    $(this).remove();
                }
            });
        }
        return false;
    });

    // Inject <label> to categories links
    /* REMOVED JASPAR
        $(function () {
            if ($(document).find('#categories')) {
                $('#categories li a').each(function () {
                    $(this).wrapInner('<label></label>');
                });
            }
            return false;
        });
        */
    /*
    // Checkout confirm to proceed
    $(function () {
        if ($(document).find('#ctl00_ContentPlaceHolder1_payment_options')) {
        //if ($(document).find('#ctl00_ContentPlaceHolder1_repDeliveryOptions_ctl00_radDeliveryOption')) {
            //console.log('Yes! I found the delivery method');
            //var confirm2proceedTxt;
            var confirm2proceedTxt = $('#ctl00_ContentPlaceHolder1_lb549').text();
            //var btnProceed = $('#ctl00_ContentPlaceHolder1_delivery_method .checkout_progress');
            var btnProceed = $('#ctl00_ContentPlaceHolder1_payment_options #ctl00_ContentPlaceHolder1_lnkBtnNext_paymenyt_options');
            var addInfo = '<div class="confirm2proceed"><input id="startcheckout" type="checkbox" /><a href="#" id="checkedconfirm">' + confirm2proceedTxt + '</a></div>';
            //$(addInfo).insertAfter('.delivery_method_list');
            $(addInfo).insertAfter('#ctl00_ContentPlaceHolder1_dvPaymentOptions');
        }
        btnProceed.hide();
        $('#checkedconfirm').click(function (e) {
            e.preventDefault();
            $('#startcheckout').trigger('click');
            toggleCheck($('#startcheckout'));

            if ($('#startcheckout').attr('checked')) {

                btnProceed.show();
                $('.confirm2proceed').addClass('confirmed');
            } else {
                btnProceed.hide();
                $('.confirm2proceed').removeClass('confirmed');
            }
        });
        $('#startcheckout').click(function () {
            toggleCheck($('#startcheckout'));
            btnProceed.toggle();
            $('.confirm2proceed').toggleClass('confirmed');
        });
    });
    */

    // Checkout - Address input extra description
    $(function () {
        var targetNode = $('#ContentPlaceHolder1_txtAddress').parent('p');
        if ($(document).find('#ContentPlaceHolder1_txtAddress') && $(targetNode).parent('div').hasClass('payment_info')) {
            $(targetNode).append('<span class="mobile_validate">' + $('#ContentPlaceHolder1_lb550').text() + '</span>');
            /*
            if ($('body').hasClass('th_lang')) {
                $(targetNode).append('<span class="mobile_validate">Ã Â¸Â£Ã Â¸Â°Ã Â¸Å¡Ã Â¸Â¸Ã Â¸Å¡Ã Â¹â€°Ã Â¸Â²Ã Â¸â"¢Ã Â¹â‚¬Ã Â¸Â¥Ã Â¸â€šÃ Â¸â€"Ã Â¸ÂµÃ Â¹Ë† Ã Â¸Â«Ã Â¸Â¡Ã Â¸Â¹Ã Â¹Ë†Ã Â¸â€"Ã Â¸ÂµÃ Â¹Ë†/Ã Â¸Â«Ã Â¸Â¡Ã Â¸Â¹Ã Â¹Ë†Ã Â¸Å¡Ã Â¹â€°Ã Â¸Â²Ã Â¸â"¢ Ã Â¸â€¹Ã Â¸Â­Ã Â¸Â¢ Ã Â¸â€"Ã Â¸â"¢Ã Â¸â"¢ Ã Â¹Æ'Ã Â¸Â«Ã Â¹â€°Ã Â¸â€Ã Â¸Â£Ã Â¸Å¡Ã Â¸â€"Ã Â¹â€°Ã Â¸Â§Ã Â¸â"¢Ã Â¹â‚¬Ã Â¸Å¾Ã Â¸Â·Ã Â¹Ë†Ã Â¸Â­Ã Â¸ÂÃ Â¸Â²Ã Â¸Â£Ã Â¸Ë†Ã Â¸Â±Ã Â¸â€Ã Â¸ÂªÃ Â¹Ë†Ã Â¸â€¡Ã Â¸â€"Ã Â¸ÂµÃ Â¹Ë†Ã Â¸â€"Ã Â¸Â¹Ã Â¸ÂÃ Â¸â€¢Ã Â¹â€°Ã Â¸Â­Ã Â¸â€¡</span>');
            } else {
                $(targetNode).append('<span class="mobile_validate">Please include all number, village, and street</span>');
            }
            */
        }
    });

    // Fixed top main navigators
    $(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll > 50) {
                $('#header').addClass('fixed-top');
                //$('#tabs .container').addClass('shifted');
            } else {
                $('#header').removeClass('fixed-top');
                //$('#tabs .container').addClass('shifted');
            }
        });
    });

    $(document).ready(function () {
        $(".right-innfo-button > a").click(function () {
            $(".main-info-bar-bid").remove();
            $("#md-power-auction").removeClass("fixed-info-checkout-bar");
        });
        $(".right-innfo-button > a").click(function () {
            $("body").addClass("fixed-info-checkout-bar-top");
        });
    });



    // Fixed top Checkout
    $(function () {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            var fixedTopPixelToCheck1 = 270;
            if ($(".info-bar-bid").length > 0 && $("div.smartbanner").length > 0)
            {
                fixedTopPixelToCheck1 = $(".power-auction-box").height()+20; //340
            }
            else if ($(".info-bar-bid").length == 0 && $("div.smartbanner").length > 0) {
                fixedTopPixelToCheck1 = $(".power-auction-box").height() + 60; //340
            }
            else if ($(".info-bar-bid").length == 0 && $("div.smartbanner").length == 0) {
                fixedTopPixelToCheck1 = $(".power-auction-box").height() + 70; //340
            }
            else if ($(".info-bar-bid").length > 0 && $("div.smartbanner").length == 0) {
                fixedTopPixelToCheck1 = $(".power-auction-box").height() + 10; //340
            }
            //add feed category height
            fixedTopPixelToCheck1 = fixedTopPixelToCheck1 + $(".feature-buttons").height();
            //console.log(fixedTopPixelToCheck1);
            if (scroll > fixedTopPixelToCheck1) {
                    $('#md-power-auction.sky-blue').addClass('fixed-checkout');
                } else {
                    $('#md-power-auction.sky-blue').removeClass('fixed-checkout');
                }
           
            //var scroll = $(window).scrollTop();
            var fixedTopPixelToCheck2 = 340;
            if ($(".info-bar-bid").length > 0 && $("div.smartbanner").length > 0) {
                fixedTopPixelToCheck2 = $(".power-auction-box").height() + 10; //280;
            }
            else if ($(".info-bar-bid").length == 0 && $("div.smartbanner").length > 0) {
                fixedTopPixelToCheck2 = $(".power-auction-box").height() + 60; //340
            }
            else if ($(".info-bar-bid").length == 0 && $("div.smartbanner").length == 0) {
                fixedTopPixelToCheck2 = $(".power-auction-box").height() + 60; //340
            }
            else if ($(".info-bar-bid").length > 0 && $("div.smartbanner").length == 0) {
                fixedTopPixelToCheck2 = $(".power-auction-box").height() + 10; //340
            }

            //add feed category height
            fixedTopPixelToCheck2 = fixedTopPixelToCheck2 + $(".feature-buttons").height();

            if (scroll > fixedTopPixelToCheck2) {
                    $('#xs-power-auction.sky-blue').addClass('fixed-checkout');
                } else {
                    $('#xs-power-auction.sky-blue').removeClass('fixed-checkout');
                }

            //mobile top bar black color
                if (scroll > 50 && $(".info-bar-bid").length>0) {
                    $('.info-bar-bid').addClass('fixed-info-bar-bid');
                } else {
                    $('.info-bar-bid').removeClass('fixed-info-bar-bid');
                }

                if (scroll > fixedTopPixelToCheck1 && $("div.smartbanner").length > 0 && $(".info-bar-bid").length > 0) {
                    $('#md-power-auction.sky-blue').addClass('fixed-checkout-banner');
                } else {
                    $('#md-power-auction.sky-blue').removeClass('fixed-checkout-banner');
                }

                if (scroll > fixedTopPixelToCheck2 && $("div.smartbanner").length > 0 && $(".info-bar-bid").length > 0) {
                    $('#xs-power-auction.sky-blue').addClass('fixed-checkout-banner');
                } else {
                    $('#xs-power-auction.sky-blue').removeClass('fixed-checkout-banner');
                }

                if (scroll > fixedTopPixelToCheck1 && $("div.smartbanner").length > 0 && $(".info-bar-bid").length == 0) {
                    $('#md-power-auction.sky-blue').addClass('fixed-checkout-no-black');
                } else {
                    $('#md-power-auction.sky-blue').removeClass('fixed-checkout-no-black');
                }

                if (scroll > fixedTopPixelToCheck2 && $("div.smartbanner").length > 0 && $(".info-bar-bid").length == 0) {
                    $('#xs-power-auction.sky-blue').addClass('fixed-checkout-no-black');
                } else {
                    $('#xs-power-auction.sky-blue').removeClass('fixed-checkout-no-black');
                }

                if (scroll > fixedTopPixelToCheck1 && $("div.smartbanner").length == 0 && $(".info-bar-bid").length > 0) {
                    $('#md-power-auction.sky-blue').addClass('fixed-checkout-no-app');
                } else {
                    $('#md-power-auction.sky-blue').removeClass('fixed-checkout-no-app');
                }

                if (scroll > fixedTopPixelToCheck2 && $("div.smartbanner").length == 0 && $(".info-bar-bid").length > 0) {
                    $('#xs-power-auction.sky-blue').addClass('fixed-checkout-no-app');
                } else {
                    $('#xs-power-auction.sky-blue').removeClass('fixed-checkout-no-app');
                }
        });
    });

    // Hide clock images and display time text
    $(function () {
        setInterval(function () {
            $('#feed_list .info_data.timeout').each(function () {
                if ($(this).find('img').length) {
                    $(this).text($('img', this).attr('title')).addClass('alertness');
                    $('img', this).hide();
                }
            });
        }, 100);
    });

    // Checkout composition of the bank list
    /*
    $(function () {
        if ($(document).find('#ctl00_ContentPlaceHolder1_dvPaymentOptions')) {
            $('#ctl00_ContentPlaceHolder1_dvPaymentOptions .payment_options_details').addClass('rmAfterClone').clone().insertAfter('#ctl00_ContentPlaceHolder1_dvPaymentOptions .payment_options_main .delivery_method_list');
            $('#ctl00_ContentPlaceHolder1_dvPaymentOptions .payment_options_main .payment_options_details').removeClass('rmAfterClone')
            $('#ctl00_ContentPlaceHolder1_dvPaymentOptions .rmAfterClone').remove();
        }
        if ($('#ctl00_ContentPlaceHolder1_dvBanksPayment').parent('#ctl00_ContentPlaceHolder1_dvPaymentOptions .payment_options_main .payment_options_details .payment_info').length < 1) {
            $('#ctl00_ContentPlaceHolder1_dvPaymentOptions .payment_options_main .payment_options_details .payment_info').css('border','none');
        }
    });
    */
});
function closeAllOtherTabs(onThisOpen) {
    if (onThisOpen != 'languages' && $('#languages').css('display') == 'block') {
        $('#languages').toggle();
    }
    if (onThisOpen != 'cart' && $('#cart').css('display') == 'block') {
        $('#cart').slideToggle(300).toggleClass('active');
        $('.close_cart').fadeToggle(300);
    }
    if (onThisOpen != 'users' && $('#user_profile').css('display') == 'block') {
        $('#user_profile').toggle();
    }
}
function hidding(contentBlock) {
    $(contentBlock).each(function () {
        var targetDiv = $(this).attr('href');
        $(targetDiv).css('display', 'none');
        $(this).removeClass('active');
    });
}
function displaying(contentBlock, activeElement) {
    $(contentBlock).fadeIn(300);
    $(activeElement).addClass('active');
}
function toggleCheck(thatCheckbox) {
    if (thatCheckbox.prop('checked')) {
        thatCheckbox.attr('checked', 'checked').prop('checked', true);
    } else {
        thatCheckbox.removeAttr('checked').prop('checked', false);
    }
}

/*add by balar // Right Menu */
jQuery(document).ready(function ($) {

    var removeClass = true;
    $('.user-nav-bar').click(function (e) {
        $(".user-nav-bar").toggleClass("active_nav");
        $("#user_nav").toggleClass("active_nav");
        removeClass = false;
    });
    $('#user_nav').click(function (e) {
        removeClass = false;
    });
    $("html,#lang_button").click(function () {
        if (removeClass) {
            $(".user-nav-bar").removeClass('active_nav');
            $("#user_nav").removeClass('active_nav');
        }
        removeClass = true;
    });

});

/*add by balar // My current auctions collapsed script*/
$(document).ready(function () {
    $('.change_payment_option').click(function () {
        $('.payment_option_open').slideToggle("");
    });

    //set my auction panel(mobile): add gradiant when row more than 3
    if ($("#my_current_auctions .mca_list").height() < 211) {
        $("#my_current_auctions").addClass("hide-gradiant");
        $("#my_current_auctions").removeClass("show-gradiant");
    }
    else {
        $("#my_current_auctions").removeClass("hide-gradiant");
        $("#my_current_auctions").addClass("show-gradiant");
    }
});
function setLocalStorageValue(key, value) {
    if (typeof (Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        sessionStorage.setItem(key, value);
    } else {
        // Sorry! No Web Storage support..
        console.log("local storage not supported");
    }
}
function getLocalStorageValue(key) {
    var retStr = "";
    if (typeof (Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        try {
            retStr = sessionStorage.getItem(key);
        }
        catch (err) { }
    } else {
        // Sorry! No Web Storage support..
        console.log("local storage not supported");
    }
    return retStr;
}

//set my auction panel(mobile)
var chkAuctionPanelStatus = getLocalStorageValue("auction_panel_status");

if (chkAuctionPanelStatus == "1") {
    $(".mca_header").addClass('plus-minus');
    $('.mca_list').show();
}
else if (chkAuctionPanelStatus == "0") {
    $(".mca_header").removeClass('plus-minus');
    $('.mca_list').hide();
}

/*add by balar // plus-minus script */
//$('.mca_header').click(function () {
$(document).on('click', '.mca_header', function (e) {
    $('.mca_list').slideToggle("slow");
    if ($(this).hasClass('plus-minus')) {
        $(this).removeClass('plus-minus');
        setLocalStorageValue("auction_panel_status", "0");
    } else {
        $('.mca_header .plus-minus').removeClass('plus-minus');
        $(this).addClass('plus-minus');
        setLocalStorageValue("auction_panel_status", "1");
    }
});


/*add by balar // Right popup */

//jQuery(document).ready(function ($) {

//    var removeClass = true;
//    $('#popupright .popup_btn a').click(function (e) {
//        $("#popupright").toggleClass("active");
//        removeClass = false;
//    });

//    $('#popupright').click(function (e) {
//        removeClass = false;
//    });
//    $("html").click(function () {
//        if (removeClass) {
//            $("#popupright").removeClass('active');
//        }
//        removeClass = true;
//    });

//});


/*add by balar // Left Menu */
jQuery(document).ready(function ($) {

    var removeClass = true;
    $('.mobile-menu').click(function (e) {
        $(".mobile-menu").toggleClass("active_menu");
        $("#tabs").toggleClass("active_menu");
        removeClass = false;
    });

    $('#tabs').click(function (e) {
        removeClass = false;
    });
    $("html").click(function () {
        if (removeClass) {
            $(".mobile-menu").removeClass('active_menu');
            $("#tabs").removeClass('active_menu');
        }
        removeClass = true;
    });

});
/*add by balar // Click a Menu */
jQuery(document).ready(function () {
    $('.categories a, .explore_menu a').on('click touchstart', function (e) {  //touchend

        if (e.type == "click" || e.type == "touchend") {

            var el = $(this);
            var link = el.attr('href');
            window.location = link;
        }
    });
});

/* ragister , login & checkuot validation , #checkout*/
$('.signup, .login, #checkout').on('change', '.form-control', function (event) {
    event.preventDefault();
    if ($(this)[0].checkValidity != undefined) {
        var isValid = $(this)[0].checkValidity();
        if (isValid) {
            $(this).parents('.form-group').addClass('has-success');
        }
        else {
            $(this).parents('.form-group').removeClass('has-success');
        }
    }
});

/*popup open in close scroll*/
jQuery(document).ready(function () {
    if ($("#ContentPlaceHolder1_pnlLoginPopup , .bidding_info_success_popup").length > 0) {
       //$("#body").css({ "overflow": "hidden", "position": "fixed" });
    }
    //$("#ContentPlaceHolder1_pnlLoginPopup .close , .bidding_info_success_popup .close").click(function () {
    //    $('#body').css({ "overflow": "", "position": "" });
    //});
});

/* my cart like and unlike script */

$(document).ready(function () {
    $('body').on("click", '.heart', function () {
        var A = $(this).attr("id");
        var B = A.split("like");
        var messageID = B[1];
        var C = parseInt($("#likeCount" + messageID).html());
        $(this).css("background-position", "")
        var D = $(this).attr("rel");

        if (D === 'like') {
            $("#likeCount" + messageID).html(C + 1);
            $(this).addClass("heartAnimation").attr("rel", "unlike");

        }
        else {
            $("#likeCount" + messageID).html(C - 1);
            $(this).removeClass("heartAnimation").attr("rel", "like");
            $(this).css("background-position", "left");
        }
    });

    /* mobile footer hide show toggle*/

    $(".mob_cat_list > .simple_nav").hide();
    $(".mob_cat_list > h3").click(function () {
        $(".mob_cat_list > .simple_nav").slideToggle();
        $(".mob_cat_list > h3").toggleClass('active');
    });

    // About Chilindo
    $(".mob_about > .simple_nav").hide();
    $(".mob_about > h3").click(function () {
        $(".mob_about > .simple_nav").slideToggle();
        $(".mob_about > h3").toggleClass('active');
    });

    // Help & Contact
    $(".mob_site_map > .simple_nav").hide();
    $(".mob_site_map > h3").click(function () {
        $(".mob_site_map > .simple_nav").slideToggle();
        $(".mob_site_map > h3").toggleClass('active');
    });
});

/* minus and plus prodcutpage */
//(function () {
$(function () {
    //return 
    // $(".minus,.plus").click(function () {
    // .decreaseBid, .increaseBid
    $(document).on('click', '.decreaseBid,.increaseBid', function (e) {
        var inc_dec, qty, range_values, range_array;
        inc_dec = 0;
        qty = $("#ContentPlaceHolder1_txtBidNew");  //[class=input_placebid]

        var showInKilo='';

        if ($("#hdnShowAsKilo").val() == "1") {
            showInKilo = 'K';
        }
        

        if (qty.length > 0) {
            try {
                range_values = $("#ContentPlaceHolder1_txtBid").attr('data-slider-values');
                range_array = range_values.split(",");
                if ($(this).hasClass("decreaseBid")) {
                    //inc_dec = parseInt(qty.val()) > 0 ? -1 : 0;
                    var currQty = qty.val();
                    currQty = parseFloat(currQty);

                    $.each(range_array.reverse(), function (key, value) {
                        value = parseFloat(value);
                        if (currQty > value) {
                            qty.val(value);
                            $("#ContentPlaceHolder1_txtBid").val(value);
                            $('#ddlBidNew li').removeClass('active');
                            $('#ddlBidNew li[data-value = "' + qty.val() + showInKilo +'"]').addClass('active');
                             $('#NewBidTxt').text(qty.val() + showInKilo);

                            let baseValue = $('#ddlBidNew li.active').attr('data-value-base');
                            $('#ContentPlaceHolder1_txtBidBase').val(baseValue);
                            $('#NewBidTxt').attr('BaseValue', baseValue);
                            currentValueForBid = qty.val() + showInKilo;
                            return false;
                        }
                    });
                } else {
                    //inc_dec = 1;
                    var currQty = qty.val();
                    currQty = parseFloat(currQty);
                    $.each(range_array, function (key, value) {
                        value = parseFloat(value);
                        if (currQty < value) {
                            qty.val(value);
                            $("#ContentPlaceHolder1_txtBid").val(value);
                            $('#ddlBidNew li').removeClass('active');
                            $('#ddlBidNew li[data-value = "' + qty.val() + showInKilo + '"]').addClass('active');
                            $('#NewBidTxt').text(qty.val() + showInKilo);

                            let baseValue = $('#ddlBidNew li.active').attr('data-value-base');
                            $('#ContentPlaceHolder1_txtBidBase').val(baseValue);
                            $('#NewBidTxt').attr('BaseValue', baseValue);
                            currentValueForBid = qty.val() + showInKilo;
                            return false;
                        }
                    });
                }

                //return qty.val(parseInt(qty.val()) + inc_dec);
            }
            catch (err) {
                if (qty.length > 0) {
                    $("#ContentPlaceHolder1_txtBid").val(qty.val());
                    $("#ContentPlaceHolder1_txtBidNew").val(qty.val());
                    $("#ddlBidNew").text(qty.val());
                }
            }

            // call and check if bid value needs to show as kilo format
            formatToKilo();
        }
    });
});

//}).call(this);

// Bid response box fixed position
$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 70) {
            $('#product_id_1 .mbid_info').addClass('fixed-mbid');
        } else {
            $('#product_id_1 .mbid_info').removeClass('fixed-mbid');
        }
    });
});

// click to option expand 
$('ul.expandible').each(function () {
    var lis = $(this).find('li:gt(5)');
    if (!$(this).hasClass('expanded')) {
        lis.hide();
    } else {
        lis.show();
    }

    if (lis.length > 0) {
        var strLoadMore = $("#lit1401").val();
        var strLess = $("#lit1402").val();
        if (strLoadMore == "") {
            strLoadMore = "Load More";
        }
        if (strLess == "") {
            strLess = "Less";
        }
        $(this).append($('<div class="expand btn-loadmore"><div class="loadMore">' + strLoadMore + '</div></div>').click(function (event) {
            var $expandible = $(this).parents('.expandible');
            $expandible.toggleClass('expanded');
            if (!$expandible.hasClass('expanded')) {
                $(this).text(strLoadMore);
            } else {
                $(this).text(strLess);
            };
            lis.toggle();
            event.preventDefault();
        }));
    }
});
//$(document).ready(function () {
//    var windowWidth = $(window).width();
//    if (windowWidth <= 767) {
//        //var isExists = ;
//        debugger;
//        if ($($(".js_smartbanner").length)) {

//            $("body").addClass("mobile-app-banner");
//        }
//        else {
//            $("body").removeClass("mobile-app-banner");

//        }
//    }
//    else {
//        $("body").removeClass("mobile-app-banner");
//    }
//});


// New Login Popup Script 
/*
    $('[data-toggle="collapse"]').on('click', function (e) {
        e.preventDefault();
        if ($(this).attr('href') != "#Signin1_loginsignup_info") {
            $('#SignUpData').addClass('fullScreen');
        } else {
            $('#SignUpData').removeClass('fullScreen');
        }

        if ($(this).attr('href') == "#SwitchLanguage") {
            if ($('#SignUpData').hasClass('ChnageLanguage') == false) {
                $('#SignUpData').addClass('ChnageLanguage');
            }
        } else {
            $('#SignUpData').removeClass('ChnageLanguage');
        }

        if ($('#dv-login').find('.collapse').hasClass('in')) {
            var idx = $(this).attr('href');
            var idxShown = '#' + $('.collapse.in').attr('id');
            if (idx == idxShown) {
                e.stopPropagation();
            }
        }
        if ($('#SignUpData').find('.signup-validate').length > 0) {
            alert("call");
            $('#SignUpData').removeClass('fullScreen');
        }
    });
*/


$(document).on('click', '#SignUpData', function (e) {
    if ($(e.target).hasClass('fa-chevron-left') || $(e.target).closest('a').hasClass('backBtn')) {
        $('#SignUpData').removeClass('fullScreen');
    }
    var hrefVal = $(e.target).attr('href');
    if (hrefVal != undefined && (hrefVal.indexOf("#Signin1_loginsignup_info") != -1 || hrefVal.indexOf("#Signin1_signuplogin_info") != -1 || hrefVal.indexOf("#Signin1_loginsignup_ac") != -1 || hrefVal.indexOf("#SwitchLanguage") != -1)) {
        $('#SignUpData').addClass('fullScreen');
    }

    if (hrefVal != undefined && hrefVal.indexOf("#SwitchLanguage") != -1) {
        e.preventDefault();
        if ($('#SignUpData').hasClass('ChnageLanguage') == false) {
            $('#SignUpData').addClass('ChnageLanguage');
            $('a.languageBtn').removeAttr('data-toggle');
        }
    } else {
        if ($(e.target).hasClass('fa-chevron-left') || $(e.target).closest('a').hasClass('backBtn')) {
            $('a.languageBtn').attr('data-toggle', 'collapse');
        }
        $('#SignUpData').removeClass('ChnageLanguage');
    }
});