$(function(){
    let cloud_purple = '#783a9c';
    let cloud_peach = '#ff9178'
    $('#card1').mouseenter(function(){
        $(this).stop().animate({
            height: "90%",
            backgroundColor: cloud_purple,
            color: cloud_peach
        },300)
        $(this).find("button").stop().animate({
            backgroundColor: cloud_purple,
            color: cloud_peach
        },300)
    });
    $('#card1').mouseleave(function(){
        $(this).stop().animate({
            height: "80%",
            backgroundColor: cloud_peach,
            color: cloud_purple
        },300)
        $(this).find("button").stop().animate({
            backgroundColor: cloud_peach,
            color: cloud_purple
        },300)
    });
    $('#card2').mouseenter(function(){
        $(this).stop().animate({
            height: "90%",
            backgroundColor: cloud_purple,
            color: cloud_peach
        },300)
        $(this).find("button").stop().animate({
            backgroundColor: cloud_purple,
            color: cloud_peach
        },300)
    });
    $('#card2').mouseleave(function(){
        $(this).stop().animate({
            height: "80%",
            backgroundColor: cloud_peach,
            color: cloud_purple
        },300)
        $(this).find("button").stop().animate({
            backgroundColor: cloud_peach,
            color: cloud_purple
        },300)
    });
    $('#card3').mouseenter(function(){
        $(this).stop().animate({
            height: "90%",
            backgroundColor: cloud_purple,
            color: cloud_peach
        },300)
        $(this).find("button").stop().animate({
            backgroundColor: cloud_purple,
            color: cloud_peach
        },300)
    });
    $('#card3').mouseleave(function(){
        $(this).stop().animate({
            height: "80%",
            backgroundColor: cloud_peach,
            color: cloud_purple
        },300)
        $(this).find("button").stop().animate({
            backgroundColor: cloud_peach,
            color: cloud_purple
        },300)
    });
    $('#card4').mouseenter(function(){
        $(this).stop().animate({
            height: "90%",
            backgroundColor: cloud_purple,
            color: cloud_peach
        },300)
        $(this).find("button").stop().animate({
            backgroundColor: cloud_purple,
            color: cloud_peach
        },300)
    });
    $('#card4').mouseleave(function(){
        $(this).stop().animate({
            height: "80%",
            backgroundColor: cloud_peach,
            color: cloud_purple
        },300)
        $(this).find("button").stop().animate({
            backgroundColor: cloud_peach,
            color: cloud_purple
        },300)
    });
  });