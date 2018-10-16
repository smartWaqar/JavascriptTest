


// Function 1

function f1(a, b){

	let b_copy = b;

	for (let i of b_copy){
		if (a.includes(i)){
			a = a.replace(i, '')
			b = b.replace(i, '')
		}
	}

	return a.length + b.length
}

// Function 2

function f2(a1, a2){

	let result = []

	for (let i of a2){

		let sum = 0;
		for (let j of a1){
			if (i == j){
				sum++
			}
		}

		result.push(sum)
	}

	return result
}


// Function 3

function f3(mystring){

	for (let i of mystring){

		if (!( (i >= 'A' && i <= 'Z' ) || (i >= 'a' && i <= 'z' ) || ( i >= '0' && i <= '8' ) || (['_','-','.'].includes(i)) ) ) {
			return 0
		}
	}

	let numParts = 0
	let partsArray = mystring.split('.')

	for ( let i of partsArray){
		if (i.length != 0){
			numParts++
		}
	}
	
	return numParts
}

// Function 4

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var currDate = new Date()

async function f4(cb) {

	currDate = new Date()
  	console.log('f4 called')
  	
  	await sleep(300)
  
  	let mycurrDate = new Date()

  	if (!(mycurrDate - currDate < 300)){
  		cb()
  	}

}

//

function cb(){
	console.log("This is call back function")
}



// Please Ignore below code.
// Practice code to test the above functions

// 

/*

async function test_f4(){

	f4(cb)

	await sleep(100)

	f4(cb)

	await sleep(200)

	f4(cb)

}

*/

//test_f4()

/*
let a = "bacdc"
let b = "dcbac"

console.log(f1(a,b))
*/

/*
let a = f2(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab'])
console.log(a)
*/

/*
console.log(f3("@xtech.guru"))

let a = ''

//console.log(  a.split(',').length )
*/


export {f1, f2, f3, f4}