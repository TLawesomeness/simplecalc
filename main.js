'use strict';
$(document).ready(init);

function init() {
   $('.keys').on("click", ".button", function() {
    //  debugger;
     var clickValue = $(this).text();
     var screenValue = $('.screen').text();
     var totalValue = screenValue + clickValue;
     $('.screen').text(totalValue);
   });

   $('#clearall').on('click', function () {
     $('.screen').text("");
   })

   $('.keys').on('click', '.eval', function() {
     var answer = eval($('.screen').text());
     $('.screen').text(answer);
   })

   $('.keys').on('click', '.flipsign', function () {
     var answer = eval($('.screen').text());
     var flipsign = answer * -1;
     $('.screen').text(flipsign);
   })

   $('.keys').on('click', '.sqrt', function() {
     var answer = eval($('.screen').text());
     var sqrt = Math.sqrt(answer);
     $('.screen').text(sqrt);
   })

  //  $('.keys').on('click', '.exponent', function() {
  //    var answer = eval($('.screen').text());
  //    var exponent = Math.pow(answer);
  //    $('.screen').text(exponent);
  //  })



}
