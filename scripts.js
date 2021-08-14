$(document).ready(function(){
    changeContainer($(window).width());
    $(window).resize(function(){ changeContainer($(window).width()); });

    $("[data-dropdown-btn]").on("click", function(e) {
    	e.preventDefault();
    	dropdownBox = $("[data-dropdown = '"+$(this).attr("data-dropdown-btn")+"']");
    	countUplElems = parseInt(dropdownBox.attr("data-countuplelems"));
    	counter = 0;
    	dropdownBox.find(".news_thumb.hidden").each(function() {
    		counter++;
    		if(counter <= countUplElems) {
    			$(this).removeClass("hidden");
    		}
    	});
    	if( dropdownBox.find(".news_thumb.hidden").length == 0) {
    		$(this).remove();
    	}
    });

});

function changeContainer(_width){
    if(_width < 768) {
        $('.container').removeClass('container').addClass('container-fluid');
    } else {
        $('.container-fluid').removeClass('container-fluid').addClass('container');
    }
}