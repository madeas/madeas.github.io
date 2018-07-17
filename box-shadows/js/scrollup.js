$(function() {
  var bigfa_scroll = {
    drawCircle: function(id, percentage, color) {
      var width = jQuery(id).width();
      var height = jQuery(id).height();
      var radius = parseInt(width / 2.20);
      var position = width;
      var positionBy2 = position / 2;
      var bg = jQuery(id)[0];
      id = id.split("#");
      var ctx = bg.getContext("2d");
      var imd = null;
      var circ = Math.PI * 2;
      var quart = Math.PI / 2;
      var gradient = ctx.createLinearGradient(10, 5, 10, 25, 10);
      gradient.addColorStop("0", "#3369E7");
      gradient.addColorStop(".5", "#47c9e5");
      gradient.addColorStop("1.0", "#46e5cd");
      ctx.strokeStyle = gradient;
      ctx.lineCap = "butt";
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.closePath();
      ctx.fill();
      ctx.lineWidth = 2;
      imd = ctx.getImageData(0, 0, position, position);
      var draw = function(current, ctxPass) {
        ctxPass.putImageData(imd, 0, 0);
        ctxPass.beginPath();
        ctxPass.arc(positionBy2, positionBy2, radius, -(quart), ((circ) * current) - quart, false);
        ctxPass.stroke();
      }
      draw(percentage / 100, ctx);
    },
    backToTop: function($this) {
      $this.click(function() {
        jQuery("body,html").animate({
            scrollTop: 0
          },
          777);
        return false;
      });
    },
    scrollHook: function($this, color) {
      color = color ? color : "#000000";
      $this.scroll(function() {
        var docHeight = (jQuery(document).height() - jQuery(window).height()),
          $windowObj = $this,
          $per = jQuery(".percent"),
          percentage = 0;
        defaultScroll = $windowObj.scrollTop();
        percentage = parseInt((defaultScroll / docHeight) * 100);
        var backToTop = jQuery(".ScrollUp");
        if (backToTop.length > 0) {
          if ($windowObj.scrollTop() > 0) {
            backToTop.addClass("button--show");
          } else {
            backToTop.removeClass("button--show");
          }
          $per.attr("data-percent", percentage + '%');
          bigfa_scroll.drawCircle(".ScrollUpCanvas", percentage, color);
        }

      });
    }
  }

  jQuery(document).ready(function() {
    jQuery("body").append('<div class="ScrollUp" data-action="gototop"><canvas class="ScrollUpCanvas" width="38" height="38"></canvas><div class="percent"></div></div>');
    var T = bigfa_scroll;
    T.backToTop(jQuery(".ScrollUp"));
    T.scrollHook(jQuery(window), "#26d6f9");
  });
});
