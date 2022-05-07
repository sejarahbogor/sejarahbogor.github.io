var speed = 'slow';

$(document).ready(function(){
    // Add smooth scrolling to all links
    $(".ayoBtn").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
        document.getElementById("pT2").scrollIntoView({
            block: "center",
            behavior: "smooth"
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
    
    $("i.ad1").on('click', function(event) {
  
        // Make sure this.hash has a value before overriding default behavior
          document.getElementById('pT3').scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest"
          });
      });

    $("i.ad2").on('click', function(event){
        document.getElementById("pT4").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        })
    })

    $("i.ad3").on('click', function(event){
        document.getElementById("pT5").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        })
    })

    $("i.ad4").on('click', function(event){
        console.log(4)
        document.getElementById("pT6").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        })
    })

    $("i.ad5").on('click', function(event){
        document.getElementById("pT7").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        })
    })
    
    
    $(".instaAcc").on('click', function(event) {
        window.location.href = "https://www.instagram.com/inumakidoge/"
    })

});