$(document).on( "mouseover", function(event) {
	$( "#log" ).text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
	var r = magic();
	var g = magic();
	var b = magic();
	$(".button").css("background-color", "#"+ r + g + b);
	$(".icon_holder").css("background-color", "rgba(255,255,255, 0.1)");
});
$(".button").on( "mouseout", function(event) {
	$(".button").css("background-color", "#7299FF");
	$(".icon_holder").css("background-color", "rgba(255,255,255, 0.3)");
});

function magic() {
    var randomNumber = Math.floor(Math.random()*(255-0+1)+0);
    return ("0"+(Number(randomNumber).toString(16))).slice(-2).toUpperCase();
}