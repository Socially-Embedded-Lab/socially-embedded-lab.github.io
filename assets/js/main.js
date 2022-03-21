jQuery(document).ready(function($) {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 400});
    
    /* ======= Fixed header when scrolled ======= */
    
    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 50) {
             $('#header').addClass('navbar-fixed-top');
             // $("#small-logo").attr("src","/assets/img/socemb-logo-small-dark.svg");
             $('#small-logo').hide();
             $('#small-logo-dark').show();
         }
         else {
             $('#header').removeClass('navbar-fixed-top');
             // $("#small-logo").attr("src","/assets/img/socemb-logo-small.svg");
             $('#small-logo-dark').hide();
             $('#small-logo').show();
         }
    });
   
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
        $('body').scrollTo(target, 400, {offset: -70, 'axis':'y', easing:'easeOutQuad'});
        //Collapse mobile menu after clicking
        if ($('.navbar-collapse').hasClass('show')){
            $('.navbar-collapse').removeClass('show');
        }
        
    });

});