$(document).ready(function(){
  $('#free_pm, #freemium_pm').on('click', function() {
    $(this).next('.feedback-click').show().delay(2000).fadeOut(500);
  });
});
