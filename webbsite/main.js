




	




	function printResult(){


	var i = document.getElementById("bas").value;

	var n = document.getElementById("exponent").value;


	var result = i ** n; 

	console.log(i +" ^ "+ n + " = " +result);
	document.getElementById("answer").innerHTML = result;


	if(result === Infinity){

		document.getElementById("answer").innerHTML = "no";

	}
}



		function Clear(){

		document.getElementById("bas").value ="";
		document.getElementById("exponent").value ="";
		document.getElementById("answer").innerHTML = "";


		}



	
	document.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) {

    	document.getElementById("Getresults").click();
        
    }
    else if(event.keyCode == 67) {
       
       document.getElementById("clear").click();
       
    }
    else if(event.keyCode == 86){

		console.clear();
    }
});









