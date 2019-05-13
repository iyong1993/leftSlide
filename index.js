/*
*
* liyong
*
* */

var leftSlide = function (obt) {

    this.buttonWidth = obt.buttonWidth;    /*按钮宽度*/
    this.slideDiv = obt.slideDiv;   /*滑动块类名*/
    this.showDiv = obt.showDiv;     /*显示块类名*/
    this.contentDiv = obt.contentDiv;   /*内容块类名*/
    this.detDelete = obt.detDelete;   /*删除块类名*/

}


leftSlide.prototype.init = function () {
    var self = this;

    var touchStart;
    var touchmove;
    var touchStartY;
    var touchmoveY;

    $(self.slideDiv).each(function () {

        var height = $(this).find(self.contentDiv).innerHeight();
        $(this).find(self.detDelete).css({'height':height,width:self.buttonWidth});
        $(this).attr('if-open','false');
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
        console.log($(this).attr('if-open'));
        console.log($(this).attr('if-open')=='false');

        if($(this).attr('if-open')=='false'){
            if(moveWidth>0&&moveHeight<50){
                $(this).find(self.showDiv).css('transform', 'translateX(-'+moveWidth+'px)');
                if(moveWidth>50){
                    $(this).find(self.showDiv).addClass('li-div-tran');
                    $(this).find(self.showDiv).css('transform', 'translateX(-'+ self.buttonWidth +'px)');
                    $(this).attr('if-open','true');
                }
            }else{
                $(this).find(self.showDiv).addClass('li-div-tran');
                $(this).find(self.showDiv).css('transform', 'translateX(0)');
                $(this).attr('if-open','false');
            }
        }

        if(moveWidth<0){
            $(this).find(self.showDiv).addClass('li-div-tran');
            $(this).find(self.showDiv).css('transform', 'translateX(0)');
            $(this).attr('if-open','false');
        }
    });

    $(self.slideDiv).on('touchend',function (e) {
        // e.preventDefault();
        var moveWidth = touchStart - touchmove;
        if(moveWidth>0){
            if(moveWidth<70){
                $(this).find(self.showDiv).addClass('li-div-tran');
                $(this).find(self.showDiv).css('transform', 'translateX(0)');
                $(this).attr('if-open','false');
            }
        }
    });

    $(self.detDelete).on('click',function () {
        $(this).parents(self.slideDiv).remove();
    });

}








