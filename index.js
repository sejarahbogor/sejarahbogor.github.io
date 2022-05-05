var speed = 'slow';

$(document).ready(function(){
    // Add smooth scrolling to all links
    $(".ayoBtn").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
        document.getElementById('pT2').scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    });

    // Smooth transition between pages
    $('html, body').fadeIn(speed, function() {
        $('a[href], button[href]').click(function(event) {
            var url = $(this).attr('href');
            if (url.indexOf('#') == 0 || url.indexOf('javascript:') == 0) return;
            event.preventDefault();
            $('html, body').fadeOut(speed, function() {
                window.location = "./gallery.html";
            });
        });
    });
  });