/*
*
* liyong
*
* */

var leftSlide2 = function (obt) {

    this.buttonWidth = obt.buttonWidth;    /*按钮宽度*/
    this.slideDiv = obt.slideDiv;   /*滑动块类名*/
    this.showDiv = obt.showDiv;     /*显示块类名*/
    this.contentDiv = obt.contentDiv;   /*内容块类名*/
    this.detDelete = obt.detDelete;   /*删除块类名*/

}


leftSlide2.prototype.init = function () {
    var self = this;

    var touchStart;
    var touchmove;
    var touchStartY;
    var touchmoveY;

    $(self.slideDiv).each(function () {

        var height = $(this).find(self.contentDiv).innerHeight();
        $(this).find(self.detDelete).css({'height':height,width:self.buttonWidth});
    });

    $(self.slideDiv).on('touchstart',function (e) {
        // e.preventDefault();
        var touch = event.targetTouches[0];
        touchStart = touch.pageX;
        touchStartY = touch.pageY;
        $(this).find(self.showDiv).removeClass('li-div-tran');

    });

    $(self.slideDiv).on('touchmove',function (e) {
        // e.preventDefault();
        var touch = event.targetTouches[0];
        touchmove = touch.pageX;
        touchmoveY = touch.pageY;

        var moveWidth = touchStart - touchmove;
        var moveHeight = touchmoveY - touchStartY;

        if(moveWidth>0&&moveHeight<50){
            $(this).find(self.showDiv).css('transform', 'translateX(-'+moveWidth+'px)');
            if(moveWidth>70){
                $(this).find(self.showDiv).addClass('li-div-tran');
                $(this).find(self.showDiv).css('transform', 'translateX(-'+ self.buttonWidth +'px)');
            }
        }else{
            $(this).find(self.showDiv).addClass('li-div-tran');
            $(this).find(self.showDiv).css('transform', 'translateX(0)');
        }
    });

    $(self.slideDiv).on('touchend',function (e) {
        // e.preventDefault();
        var moveWidth = touchStart - touchmove;
        // var moveHeight = touchStartY - touchmoveY;
        if(moveWidth>0){
            if(moveWidth<70){
                $(this).find(self.showDiv).addClass('li-div-tran');
                $(this).find(self.showDiv).css('transform', 'translateX(0)');
            }
        }
    });

}









