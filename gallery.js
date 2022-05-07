var one = "#DEA057",
two = "#CE9461",
three = "#8D8DAA",
four = "#3A3845";
var one_ = "#d9913f",
two_ = "#c37b3c",
three_ = "#7b7b94";
four_ ="#1d1c22";

var scale = chroma.scale([one, two, three, four]).domain([0, $(document).height()]);
var scale_ = chroma.scale([one_, two_, three_, four_]).domain([0, $(document).height()]);

$(window).on('scroll', function(){
    $('body').css('background-color', scale(window.pageYOffset));
    $(".sec_ h1").css('background-color', scale_(window.pageYOffset));
    $(".sec_ h1").css('box-shadow', '10px 10px 40px 40px'+scale_(window.pageYOffset));
})


if(window.scrollY >(one_.offsetHeight + one_.offsetTop/3)){
    // do something 
}



/*$(window).scroll(function() {
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
*/
// FDF6EC