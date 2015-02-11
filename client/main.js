'use strict';
$(document).ready(init);

function init() {
  var NumLength = function(number) {
      if (number.length > 9) {
          total.text(number.substr(number.length - 9,9));
            if (number.length > 15) {
              number = '';
              total.text('Err');
            }
        }
    };
  var number = '';
    var newnumber = '';
    var operator = '';
    var total = $('.screen');
    total.text('');


    $('.keys').not('#clearall').click(function() {
    number += $(this).text();
    total.text(number);
    NumLength(number);
    });

    $('.operators').not('#equals').click(function() {
    operator = $(this).text();
    newnumber = number;
    number = '';
    total.text('0');
    });

    $('#clearall').click(function() {
    number = '';
    total.text('0');
    if ($(this).attr('id') === 'clearall') {
      newnumber = '';
    }
    });

    $('.keys').click(function() {
    if (operator === '+') {
      number = (parseInt(number, 10) + parseInt(newnumber, 10)).toString(10);
    } else if (operator === '-') {
      number = (parseInt(newnumber, 10) - parseInt(number, 10)).toString(10);
    } else if (operator === '/') {
      number = (parseInt(newnumber, 10) / parseInt(number, 10)).toString(10);
    } else if (operator === 'x') {
      number = (parseInt(newnumber, 10) * parseInt(number, 10)).toString(10);
    }
    total.text(number);
    NumLength(number);
    number = '';
    newnumber = '';
    });
}
