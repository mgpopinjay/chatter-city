var main = function() {
  $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle();
  });

  
  $('.arrow-next').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });


  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });

  $(function () {
    var slider = $("#slider").slider({
    range: "min",     
    value: 0,
    min: 0,
    max: 100,
    step: 1,
      
      slide: function(event, ui) {
          $(ui.handle).find('.tooltip').text(ui.value);
      },
      create: function(event, ui) {
        var tooltip = $('<div class="tooltip" />');
        
        $(event.target).find('.ui-slider-handle').append(tooltip);
      },
      change: function(event, ui) {
                $('#hidden').attr('value', ui.value);
                }
      });
  });

    $(function () {
      var slider = $("#slider_bottom").slider({
      range: "min",     
        value: 0,
        min: 0,
        max: 10,
        step: 1,
      
      slide: function(event, ui) {
          $(ui.handle).find('.tooltip_bottom').text(ui.value);
      },
      create: function(event, ui) {
        var tooltip_bottom = $('<div class="tooltip_bottom" />');
        
        $(event.target).find('.ui-slider-handle').append(tooltip_bottom);
      },
      change: function(event, ui) {
                $('#hidden_bottom').attr('value', ui.value);
                }
  });
});


}

$(document).ready(main);