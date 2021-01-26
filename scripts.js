$(document).ready(function(){
    changeContainer($(window).width());
    $(window).resize(function(){ changeContainer($(window).width()); });
});

function changeContainer(_width){
    if(_width < 768) {
        $('.container').removeClass('container').addClass('container-fluid');
    } else {
        $('.container-fluid').removeClass('container-fluid').addClass('container');
    }
}