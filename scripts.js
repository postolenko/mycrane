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

    $(document).on("mouseup", function(e) {
        e.preventDefault();
        hide_element = $(".input_wrapp_2");
        if (!hide_element.is(e.target)
          && hide_element.has(e.target).length === 0) {
            $(".input_wrapp_2").each(function() {
                if( $(this).find("input").val() == "" || e.keyCode === 69) {
                    $(this).find("input").removeClass("active");
                }
                console.log(!/e/gi.test($(this).find("input").val()));
            });
        }
    });

    $(document).on("mouseup", function(e) {
        e.preventDefault();
        hide_element = $(".input_wrapp");
        if (!hide_element.is(e.target)
          && hide_element.has(e.target).length === 0) {
            $(".input_wrapp").each(function() {
                if( $(this).find("input").val() == "") {
                    $(this).find("input").removeClass("active");
                }
            });
        }
    });

    $(".input_wrapp_2 input").on("input", function(e) {    
        if($(this).val() != "" || e.keyCode === 69 || $(this).val().includes('e')) {          
            $(this).addClass("active");
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