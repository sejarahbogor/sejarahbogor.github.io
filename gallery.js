var one = "#765ac4",
two = "#95d8ab",
three = "#FDF6EC";

var one_ = document.getElementById("one"),
two_ = document.getElementById("two"),
three_ = document.getElementById("three");

if(window.scrollY >(one_.offsetHeight + one_.offsetTop/3)){
    // do something 
}

$(window).scroll(function() {
    var $window = $(window),
        $body = $('body'),
        $panel = $('.sec');

    var scroll = $window.scrollTop() + ($window.height());
    $panel.each(function (){
        var $this = $(this);
        if($this.position().top <= scroll &&
           $this.position().top + $this.height() > scroll) {
               $body.removeClass(function (index, css){
                   return (css.match(/(^|\s)color-\S+/g) || 
                []).join('');
               });
               $body.addClass('color-' + $(this).data('color'));
           }
    })
}).scroll(); 

// FDF6EC