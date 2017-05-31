$(document).ready(function(){
	var clickedBtnVal;
$(document).on("click",".work-details-1", function () {
	  clickedBtnVal = $(this).attr('ng-value');
	  // alert('you clicked on button #' +clickedBtnVal);
	});

});
