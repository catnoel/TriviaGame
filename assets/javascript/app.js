
$(document).ready(function(){

	var hideQuestion1 = $(".question-area-one").hide();
	var hideQuestionAnswer = $(".questionOneAnswer").hide();
	var hideQuestion2 = $(".question-area-two").hide();
	$(".question-area-three").hide();
// in this section, i am attempting to use .text() or .val() to make a conditional statement
// I am checking if the radio button associate with the string of the correct answer 
// is clicked. if it is clicked then I want it to ...
	

	
	var startQuestionOne = $("#start").on("click", function(){
		$("#start").hide();
		$(".question-area-one").show();
		var correctAnwser = $("#choice4").on().text();
		var wrongAnswer1 = $("#choice1").on().text();
		var	wrongAnswer2 = $("#choice2").on().text();
		var wrongAnswer3 = $("#choice3").on().text();
		
		$(document).click(function(event){
			var mouseClick = $(event.target).text();
			console.log(mouseClick);
			if (mouseClick === correctAnwser){
				alert("correct!");
			} else if ( mouseClick === wrongAnswer1){
				$(".question-area-one").hide();
				$(".questionOneAnswer").show();
			}  //here i wanted to build the page that shows the correct answer 
				//depending upon what is clicked - i only got up to choice answer 1 = Spike
		});
	})

	//here i wanted to make a conditional that checks if Question one was finish
	//to continue with questions two
		if(startQuestionOne === true) {
			$(".question-area-one").hide();
			$(".question-area-two").show();
		}	

	
});
	







