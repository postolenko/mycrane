$(document).ready(function(){
    changeContainer($(window).width());
    $(window).resize(function(){ changeContainer($(window).width()); });

    $("[data-dropdown-btn]").on("click", function(e) {
    	dropdownBox= $(this).attr("data-dropdown-btn");
    	// $("[data-dropdown = '"+dropdownBox+"']").slideDown(300);
    	$("[data-dropdown = '"+dropdownBox+"']").addClass("active");
    	$(this).remove();
    });

});

function changeContainer(_width){
    if(_width < 768) {
        $('.container').removeClass('container').addClass('container-fluid');
    } else {
        $('.container-fluid').removeClass('container-fluid').addClass('container');
    }
}