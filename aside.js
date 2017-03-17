$(document).ready(function(){
  $('.show_aside').aside({
    target:'.asidebar',
      closebutton:'.closeaside',
      callback:function(){
        console.log($(this).data('id'));
      }
    });


});

(function( $ ) {
    $.fn.aside = function(options){
        var defaults = {
            target: '', //.aside_name
            toggle:true,
            closebutton:'', //.closebutton_name
            callback: function(){}

        };

        var options  = $.extend( {}, defaults, options );


        return this.each(function() {

            var me = $(this);

            //me.on('click', toggleSide);

            $(document).on('click',hideSide);

            //closetarget(me);

            me.on('click',toggleSide)

        });

        function hideSide(e){
            var that = $(e.target);
            //console.log(that.is(options.target));
            if(that.is('[data-toggle="aside"]')){
                return;
            }
            if(that.is(options.target)){
                return;
            }
            if(that.is(options.closebutton)){
                $(options.target).removeClass('sidebar-open');
            }
            else{
                $(options.target).removeClass('sidebar-open');
            }
        }


        function toggleSide(e){
            $.isFunction(options.callback) && options.callback.call(this);
            var that = $(e.target);

            if(that.is('[data-toggle="aside"]') || that.is(options.target)){
                $(options.target).hasClass('sidebar-open') ? '' : $(options.target).addClass('sidebar-open');
                return;
            }


        }

    }
})( jQuery );
