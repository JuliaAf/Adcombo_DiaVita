$(document).ready(function(){
    /*counter header*/
    var clock;
    
                clock = $('.counter-clock').FlipClock({
                    clockFace: 'DailyCounter',
                    autoStart: false,
                    language:'Russian',
                    callbacks: {
                        stop: function() {
                            $('.message').html('The clock has stopped!')
                        }
                    }
                });
                        
                clock.setTime(220880);
                clock.setCountdown(true);
                clock.start();





  /*scroll*/
  $('.toform').click(function(e) {
  e.preventDefault();
  var a = $('.js_submit'),b = a.closest('form');
  if($('form#toform').length) a = $('#toform .js_submit'),b = a.closest('form#toform');
  if(b.length && a.is(':visible')){
  $("html,body").animate({scrollTop: b.offset().top}, 1000);
  		}
  return false;
  });




   });//end
