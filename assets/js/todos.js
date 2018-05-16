//Check Of Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){ //parent - includes just span
		$(this).remove();
	}); //removes entire li
	event.stopPropagation(); //stops bubbling
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){ //event.which checks every key
		//grabbing new todo text from input
		var todoText = $(this).val();
		//clearing up the input
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span>" + todoText + "</li>"); 
	}
});

$(".fa-minus-square").click(function(){
	$("input[type='text']").fadeToggle();
})