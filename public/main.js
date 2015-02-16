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
    if ($('.screen').text().match(/\^/g)) {
      var pow = $('.screen').text().split("^").map(function(e) { return parseInt(e) ; } );
       $('.screen').text(Math.pow(pow[0], pow[1]));
    } else {
      var answer = eval($('.screen').text());
      $('.screen').text(answer);
    }
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
}
