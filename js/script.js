// Add active class onclick article span
$('.article_container span').click(function (e) {
  e.preventDefault();
  $('.article_container span').removeClass('clicked');
  $(this).addClass('clicked');
});


// Add active class onclick burger span
$(document).ready(function () {
  $('.header_burger').click(function (event) {
    $('.header_burger,.header_bottom').toggleClass('active');
    $('body').toggleClass('lock');
  });
});


// Range color for Firefox
var isFF = true;
var addRule = (function (style) {
  var sheet = document.head.appendChild(style).sheet;
  return function (selector, css) {
    if (isFF) {
      if (sheet.cssRules.length > 0) {
        sheet.deleteRule(0);
      }

      try {
        sheet.insertRule(selector + "{" + css + "}", 0);
      } catch (ex) {
        isFF = false;
      }
    }
  };
})(document.createElement("style"));


// Range color for Chrome
$('.main_slider input').on('input', function () {
  $(this).css('background', 'linear-gradient(to right, #566C83 0%, #566C83 ' + this.value + '%, rgba(86, 108, 131, 0.2) ' + this.value + '%, rgba(86, 108, 131, 0.2) 100%)');
});


// Range value change
let slider = document.querySelector(".main_range");
let value = document.querySelector(".main_value");

value.textContent = slider.value;
slider.oninput = function () {
  value.textContent = this.value; // + '%' in css or here
}


// Quantity
function wcqib_refresh_quantity_increments() {
  jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function (a, b) {
    var c = jQuery(b);
    c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
  })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function () {
  var a = this,
    b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function () {
  wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function () {
  wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function () {
  var a = jQuery(this).closest(".quantity").find(".qty"),
    b = parseFloat(a.val()),
    c = parseFloat(a.attr("max")),
    d = parseFloat(a.attr("min")),
    e = a.attr("step");
  b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});



// Footer partners slide
$(document).ready(function () {
  $('.customer-logos').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1300,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1133,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3
        }

      },
      {
        breakpoint: 499,
        settings: {
          slidesToShow: 2
        }
      },
      // {
      //   breakpoint: 267,
      //   settings: {
      //     slidesToShow: 2
      //   }
      // }
    ]
  });
});
