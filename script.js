var isDate = function (input) {
  //   write your code here
	if(input instanceof Date){
		return !isNaN(input.getTime());
	}
	if(typeof input==="string"){
		let date1=new Date(input);
		return !isNaN(date1.getTime());
	}
	
	else{
		return false;
	}
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
