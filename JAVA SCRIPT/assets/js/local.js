$(document).ready(function() {
var seconds =30;
var points =0;
var myVar="";

function myTimer() {
	if(seconds>=0){
		if(seconds==30){
			$('.score').css('margin-left','0px');
			$('#subcont').removeClass('closed');
			$('#play').addClass('closed');
			generateDifferentColor();
			selectRandomCell();
		}
    $('#timerdiv').html("Time Left :"+seconds+" Seconds");
	seconds=seconds-1;	
	}
	else{
		myStopFunction();
		$('table,#pointsdiv').parent().addClass('closed');
		 $('#totalscore').html('You have Scored '+points);
		 $('#timerdiv').html('Time Over');
		 $('#play').removeClass('closed');
		 $('#play').find('img:eq(0)').addClass('closed');
		 $('#play').find('img:eq(1)').removeClass('closed');
		 $('.score').css('margin-left','40px');
	}
	
}

function myStopFunction() {
    clearInterval(myVar);
}



function generateDifferentColor(){
var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
$('table td').css("background-color", hue);
}

function selectRandomCell(){	
	var randomNumRow = Math.floor(Math.random()*8);
	var randomNumColumn = Math.floor(Math.random()*8);
	$('tr').eq(randomNumColumn - 1).find('td').eq(randomNumRow - 1).addClass('disabled');
}

$('table td').click(function(){
	if($(this).hasClass('disabled')){
		points=points+1;
		$('#pointsdiv').html("Score: "+points);
		$('td.disabled').removeClass('disabled');
		generateDifferentColor();
		selectRandomCell();		
	}
});

$('#play img').click(function(){
	 seconds =30;
	 points =0;
	 $('#totalscore').html('Identify the odd square');
	 $('#pointsdiv').html("Score: "+points);
	 $('td.disabled').removeClass('disabled');
	 myVar = setInterval(function(){ myTimer() }, 1000);	
});

});
	
