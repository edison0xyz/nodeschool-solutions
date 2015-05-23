var numbers = process.argv.slice(2)  

var sum = 0 ; 

// use foreach as it is safer than the traditional way of iterating through a loop

numbers.forEach(function(i)	{
	sum += Number(i) ; 

}

	) ;  

console.log(sum) ; 