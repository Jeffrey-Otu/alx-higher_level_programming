#!/usr/bin/node
printArg = (countArg = process.argv.length) => {
	if (let countArg === 0){
		console.log('No argument');
	}else if(countArg === 1){
		console.log('Argument found');
	}else{
		console.log('Arguments found');
	};
};
