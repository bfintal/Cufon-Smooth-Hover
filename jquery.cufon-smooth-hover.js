/**
 * Cufon Smooth Hover Plugin https://github.com/bfintal/Cufon-Smooth-Hover
 * Applies a smooth hover color transition on Cufonized elements
 * 
 * Version 1.0
 * Updated 02/14/2013
 *
 * Copyright 2013, Benjamin Intal / Gambit Technologies - http://gambit.ph
 * Released under the GPLv3 license
 *
 * Usage: $.cufonHover([parameters]);
 * 
 */
(function($) {
    $.cufonHover = function(params) {
        // Wait until Cufon is ready
        // also, in some cases while styles haven't been applied, we get weird
        // positions, so let's wait a bit
        Cufon.CSS.ready(function() { setTimeout(function() { jQuery._cufonHover(params); }, 100); });
    };
    
    $._cufonHover = function(params) {
        // default params
        params = $.extend({speed:400}, params);
        
        // apply cufon hover on all links with an existing cufon
        return $('a > cufon').parent(':not([data-csh]):not(.csh)').each(function(cshi,elem) {
            // create another link and use that as the hover element
            var a = $(this).clone();
            
            // we can use this data-id to find the hover element
            $(this).attr('data-csh', 'cshi-'+cshi);

            // add the class and id for the cufon-hover object
            a.css('position', 'absolute').addClass('csh').attr('id', 'cshi-'+cshi).insertAfter($(this));
            
            // some elements may not actually by cufon (e.g. icons), hide them
            a.children(':not(cufon)').css('visibility', 'hidden');
            
            // Cufonize the font
            Cufon.replace('#cshi-'+cshi);
            
            // hide the hover-cufon at the start
            a.find('cufon').css('opacity', 0);

            // show the hover-cufon on hover & hide the normal one on hover
            // only use opacity to animate since display: none will invalidate the hover event
            $('#cshi-'+cshi).hover(function() {
                $('[data-csh="'+$(this).attr('id')+'"]').find('cufon').stop().animate({opacity: 0}, params.speed);
                $(this).find('cufon').stop().animate({opacity: 1}, params.speed);
            }, function() {
                $(this).find('cufon').stop().animate({opacity: 0}, params.speed);
                $('[data-csh="'+$(this).attr('id')+'"]').find('cufon').stop().animate({opacity: 1}, params.speed);
            });
            
            // replace the hover effect's position everytime
            $(this).hover(function() {
                // top is supposed to be auto, but for some reason, floating containers bug it out.
                var top = 'auto'
                if ($(this).parent().css('float') != 'none') {
                    top = '0';
                }    
                $('#'+$(this).attr('data-csh')).css({'left': $(this).position().left, 'top': top});
            });
        });
    };
})(jQuery);