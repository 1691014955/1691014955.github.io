$(function(){
    var speedX = 10,
        speedY = 10,
        // 2.获取小球
        $move = $('.move'),
        // 3.获取window屏幕属性
        $screen = $(window),
        // 4.获取小球的宽度
        ballWidth = parseInt($move.css('width')),
        // 5.获取屏幕的最大宽(高)度
        maxWidth = $screen.width() - ballWidth,
        maxHeight = $screen.height() - ballWidth,
        // 6.获取球的初始位置
        beginTop = parseInt($move.css('top')),
        beginLeft = parseInt($move.css('left'));
        interval = undefined;
    function ball() {
        beginTop += speedY;
        beginLeft += speedX;
        //   最大宽度
        if (beginLeft > maxWidth) {
            beginLeft = maxWidth
            speedX = -speedX
        } else if (beginLeft < 0) {
            beginLeft = 0
            speedX = -speedX
        }
        // 最大高度
        if (beginTop > maxHeight) {
            beginTop = maxHeight
            speedY = -speedY
        } else if (beginTop < 0) {
            beginTop = 0
            speedY = -speedY
        }
        $move.css({
            left: beginLeft + "px",
            top: beginTop + "px"
        });
    }
    //开启定时器
    function open() {
        if (interval != undefined) {
            
        } else {
            interval = setInterval(ball, 1000/60)
        }
    }
    //关闭定时器
    function close() {
        clearInterval(interval);
        interval = undefined;
    }
    $('body').click(()=>{
        if( $move.css("display")==='block'){
            $move.hide()
            close();
        }else{
            $move.show()
            open();
        }
        
    })
})
    