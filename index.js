/*
*
* liyong
*
* */

var leftSlide = function (btnWidth) {

    var touchStart;
    var touchmove;
    var touchStartY;
    var touchmoveY;

    $('.list-li').each(function () {

        var height = $(this).find('.li-content').innerHeight();
        $(this).find('.li-del').css('height',height);
    });

    $('.list-li').on('touchstart',function (e) {
        // e.preventDefault();
        var touch = event.targetTouches[0];
        touchStart = touch.pageX;
        touchStartY = touch.pageY;
        $(this).find('.li-div').removeClass('li-div-tran');

    });

    $('.list-li').on('touchmove',function (e) {
        // e.preventDefault();
        var touch = event.targetTouches[0];
        touchmove = touch.pageX;
        touchmoveY = touch.pageY;

        var moveWidth = touchStart - touchmove;
        var moveHeight = touchmoveY - touchStartY;

        if(moveWidth>0&&moveHeight<50){
            $(this).find('.li-div').css('transform', 'translateX(-'+moveWidth+'px)');
            if(moveWidth>70){
                $(this).find('.li-div').addClass('li-div-tran');
                $(this).find('.li-div').css('transform', 'translateX(-100px)');
            }
        }else{
            $(this).find('.li-div').addClass('li-div-tran');
            $(this).find('.li-div').css('transform', 'translateX(0)');
        }
    });

    $('.list-li').on('touchend',function (e) {
        // e.preventDefault();
        var moveWidth = touchStart - touchmove;
        // var moveHeight = touchStartY - touchmoveY;
        if(moveWidth>0){
            if(moveWidth<70){
                $(this).find('.li-div').addClass('li-div-tran');
                $(this).find('.li-div').css('transform', 'translateX(0)');
            }
        }
    });

}



leftSlide();