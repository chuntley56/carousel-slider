'use strict';

$(document).ready(function ($) {
  var interval = void 0;
  interval = setInterval(function () {
    moveRight();
  }, 4000);

  $('.carousel').mouseover(function () {
    clearInterval(interval);
  });

  $('.carousel').mouseleave(function () {
    interval = setInterval(function () {
      moveRight();
    }, 4000);
  });

  var slideCount = $('.carousel ul li').length;
  var slideWidth = $('.carousel ul li').width();
  var slideHeight = slideWidth * .652;
  var sliderUlWidth = slideCount * slideWidth;

  $('.carousel ul').css({ width: sliderUlWidth, marginLeft: -slideWidth });

  $('.carousel ul li').css({ height: slideHeight, marginLeft: slideWidth });

  function moveLeft() {
    $('.carousel ul').animate({
      left: +slideWidth
    }, 300, function () {
      $('.carousel ul li:last-child').prependTo('.carousel ul');
      $('.carousel ul').css('left', '');
      $('.carousel ul li:nth-of-type(1)').addClass('active');
      $('.carousel ul li:nth-of-type(n + 2)').removeClass('active');
      if ($('#slide-1').hasClass('active')) {
        $('#dot-1').addClass('dot-active');
        $('li:not(#dot-1)').removeClass('dot-active');
      } else if ($('#slide-2').hasClass('active')) {
        $('#dot-2').addClass('dot-active');
        $('li:not(#dot-2)').removeClass('dot-active');
      } else if ($('#slide-3').hasClass('active')) {
        $('#dot-3').addClass('dot-active');
        $('li:not(#dot-3)').removeClass('dot-active');
      } else if ($('#slide-4').hasClass('active')) {
        $('#dot-4').addClass('dot-active');
        $('li:not(#dot-4)').removeClass('dot-active');
      }
    });
  };

  function moveRight() {
    $('.carousel ul').animate({
      left: -slideWidth
    }, 300, function () {
      $('.carousel ul li:first-child').appendTo('.carousel ul');
      $('.carousel ul').css('left', '');
      $('.carousel ul li:nth-of-type(1)').addClass('active');
      $('.carousel ul li:nth-of-type(n + 2)').removeClass('active');
      if ($('#slide-1').hasClass('active')) {
        $('#dot-1').addClass('dot-active');
        $('li:not(#dot-1)').removeClass('dot-active');
      } else if ($('#slide-2').hasClass('active')) {
        $('#dot-2').addClass('dot-active');
        $('li:not(#dot-2)').removeClass('dot-active');
      } else if ($('#slide-3').hasClass('active')) {
        $('#dot-3').addClass('dot-active');
        $('li:not(#dot-3)').removeClass('dot-active');
      } else if ($('#slide-4').hasClass('active')) {
        $('#dot-4').addClass('dot-active');
        $('li:not(#dot-4)').removeClass('dot-active');
      }
    });
  };

  $('.btn-prev').click(function () {
    moveLeft();
    return false;
  });

  $('.btn-next').click(function () {
    moveRight();
    return false;
  });
});