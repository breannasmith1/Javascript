$(document).ready(function () {
	
	$("h1").append("A Simple jQuery Page");
    
	$("#colorChange").click(function() {
    $("h1").css("color", "red");
	});
	
	$("#appendMe").append("What happens when you click me?");
	
	$("#appendMe").css("font-weight", "Bold");
	
	$("#question").append("Do you like jQuery?");
	
	 $("button").click(function(){
        $("input:text").val("jQuery is the best!");
    });
	
	$("h3").click(function(){
    	$(this).hide();
		alert("Abracadabra!");
	});
	
	$("h3").css("text-decoration", "underline");
	
	$("footer").append("&copy; Copyright 2018 Breanna Smith");
});