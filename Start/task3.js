//let a = 20;
//let b = 30;
//let c = a + b;
//console.log(c);

function check(num) {     // Function with number(whole) as the only parameter
	// body...

	let arr = []; // Declaring an empty array
	for (var i = 1; i <=num; i++) {    // loop through the given number
		arr.push(i);                           //Push the numbers into the empty arr       
	for (var i = 0; i < arr.length; i++) {  // loop through th new array
	// Test for the conditions

		if (arr[i]%2 == 0  && arr[i] %3 == 0 && arr[i]%5 == 0) {
			arr[i] = "yu-gi-oh";
		}
		else if
			  (arr[i]%2 == 0  && arr[i] %3 == 0){
			  	arr[i] = "yu-gi";
			  }

else if
			  (arr[i]%2 == 0  && arr[i] %5 == 0){
			  	arr[i] = "yu-oh";
			  }

else if
			  (arr[i]%3 == 0  && arr[i] %5 == 0){
			  	arr[i] = "gi-oh";
			  }
		else if (arr[i]%2 == 0) {
			arr[i] = "yu";
		}
else if (arr[i]%3 == 0) {
			arr[i] = "gi";
		}

else if (arr[i]%5 == 0) {
			arr[i] = "oh";
		}

		else {
			arr[i] = arr[i];
		}

		





	}
	}
	
	 console.log(arr); 
	
}
check(100);   // calling the functions
check(10);
/*     

Task:

Write a function that takes one parameter (a whole number/integer) 
and checks if numbers from 1 to the given parameter 
(inclusive) are divisible by 2,3,5 while replacing with
 the appropriate words as specified below.

* Numbers divisible by 2 are replaced by "yu"

* Numbers divisible by 3 are replaced by "gi"

* Numbers divisible by 5 are replaced by "oh"

* Numbers are unchanged if not divsible by any of the above


If a number is divisible by more than one of the above, 
replace and join the words representing their divsiors, 
separating by hyphen (-).

NB: "divisible" in this case means no remainder after division.

 

Return an array containing all numbers 
from 1 to the passed argument(inclusive) 
where all divisible numbers have been replaced as specified above.

 

Call the function and pass 100 as an argument.

Call the function and pass it a random number of your choice

 

Examples:

4 is only divisible by 2. It would be replaced by "yu"

6 is divisible by 2 and 3. It would be replaced by "yu-gi"

30 is divisible by 2,3,and 5, so it would be replaced by "yu-gi-oh"

49 is not divisible by 2,3 or 5

 

Example output:

Assuming the function is called with 10 as argument, 
the output array would be of the form:

[1,"yu","gi",4,"oh","yu-gi",7,"yu","gi","yu-oh"]

 


if (a[i]% 2 == 0) {
			a[i] = "yu";
		}else {
			a[i] = a[i];
		}

if (a[i]% 3 == 0) {
			a[i] = "gi";
		}else{
			a[i] = a[i];
		}

if (a[i]% 5 == 0) {
			a[i] = "0h";
		}else{
			a[i] = a[i];
		}



if (a[i] % 2 && 3 == 0) {
			a[i] = "yu-gi-oh";
		} else{
			a[i] = a[i];
		}













*/