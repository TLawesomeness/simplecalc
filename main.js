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

   $('.keys').on('click', '.eval', function(){
     var answer = eval($('.screen').text());
     $('.screen').text(answer);
   })

   
}
