$(function(){
    var btn=$(".nav-lists1 li:first");
    var navMenu=$(".nav-menu");
    btn.click(function() {

        if (btn.html() == '=') {
            btn.html('x');
            navMenu.slideDown(1000);
            $('body').css('overflow', 'hidden');
            $(".banner-out").css({display:"none"})
            $(".imgs-outbox").css({display:"none"})
            $(".bottom-out").css({display:"none"})
        }
        else if (btn.html() == 'x') {
            btn.html('=');
            navMenu.slideUp();
            $('body').css('overflow', 'visible');
            $(".banner-out").css({display:"block"})
            $(".imgs-outbox").css({display:"block"})
            $(".bottom-out").css({display:"block"})
        }
    });
   $(window).resize(function(){
       if(navMenu.width()>=735){
           navMenu.css({display:"none"})
           btn.html('=');
           $('body').css('overflow', 'visible');
            $(".banner-out").css({display:"block"})
            $(".imgs-outbox").css({display:"block"})
            $(".bottom-out").css({display:"block"})
       }
   });

   //轮播图
var box=$(".banner-out"); //大盒子
var a=$(".imgbox li"); //图片
$(a.eq(0)).css({left:0});
//经过左右按钮变色
var left=$(".lBtn");
var right=$(".rBtn");
var xiaobtn=$(".btns li");  //小按钮
var t=setInterval(move,1500);
var now=0;
var next=0;
var flag=true;
xiaobtn.first().addClass('add')
function move(){
    if(!flag){return};
    flag=false;
    next++;
    if(next== a.length){
        next=0;
    }
    a.eq(next).css({left:"100%"});
    a.eq(now).animate({left:"-100%"},800);
    a.eq(next).animate({left:0},800,function(){
        flag=true;
    });
    xiaobtn.eq(now).removeClass("add").addClass("remove")
    xiaobtn.eq(next).addClass("add").removeClass("remove")
    now=next;
}
//左右按钮经过
left.hover(function(){
    left.animate({opacity:1},200);
},function(){
    left.animate({opacity:0.5},200);
});
right.hover(function(){
    right.animate({opacity:1},200);
},function(){
    right.animate({opacity:0.5},200);
});
box.hover(function(){
    clearInterval(t);
},function(){
    t=setInterval(move,1500);
    left.animate({opacity:1});
});
//右按钮
right.click(function(){
    move();
})
//左按钮
left.click(function(){
    if(!flag){return};
    flag=false;
    next--;
    if(next==-1){
        next= a.length-1;
    }
    a.eq(next).css({left:"-100%"});
    a.eq(now).animate({left:"100%"},800);
    a.eq(next).animate({left:"0"},800,function(){
        flag=true;
    });
    now=next;
})

//小按钮
xiaobtn.click(function(){
    var index1=$(this).index();
    //if(index1=now || !flag){return};
    if(index1>now){
        a.eq(index1).css({left:"100%"});
        a.eq(now).animate({left:"-100%"},800);
    }
    if(index1<now){
        a.eq(index1).css({left:"-100%"});
        a.eq(now).animate({left:"100%"},800);
    }
    a.eq(index1).animate({left:0},800);
    xiaobtn.eq(now).removeClass("add").addClass("remove")
    xiaobtn.eq(index1).addClass("add").removeClass("remove")
    now=next=index1;
});

var $h5=$(".bottom-hide li");
    var $span=$(".bottom-hide li span");
    $h5.click(function(){
        var $footwinW=document.documentElement.clientWidth;
        if($footwinW>=735){
            return;
        }else{
            $(this).children("span").slideToggle("normal")
        }
    })
})